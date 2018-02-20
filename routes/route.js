const express = require('express');
const router = express.Router();

//retrieving contacts
router.get('/contacts', (req,res,next)=>{
	res.send('Retrieving contacts');
});

//adding contacts
router.post('/contacts', (req,res,next)=>{
	res.send('Retrieving contacts');
});

//deleting contacts
router.delete('/contacts/:id', (req,res,next)=>{
	res.send('Contact has been deleted');
})
//exporting router so that it can be accessed by other files
module.exports = router;