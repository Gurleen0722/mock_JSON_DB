const express = require('express');
const router = express.Router();


//Route handler for our home page 
router.get('/home', (req, res)=>{
    res.render('home');
});

module.exports = router;