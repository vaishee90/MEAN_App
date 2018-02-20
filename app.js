//import required modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

//initiating express
var app = express();

//defining where the route details are present
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connection', ()=>{
	console.log('Database connection established');
});

mongoose.connection.on('error', (err)=>{
	if(err){
		console.log('Database connection error: ' + err);
	}
});

//assign port no
const port = 3000;

//defining what needs to be done when a particular route is called
app.use('/api', route);

//adding MW
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
//__dirname points to current dir and we want to point to curdir/views for the static path
app.use(express.static(path.join(__dirname, 'views')));

//homepage route
app.get('/', (req,res)=>{
	res.send('foobar');
});

//callback function to just show that the server has started
app.listen(port, ()=>{
	console.log('Server started on port ' + port);
});



