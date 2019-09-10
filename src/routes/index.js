const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Api HomeShareBackend' });
  console.log("HTTP Get Request");
	var userReference = db.ref("/Users/");

	//Attach an asynchronous callback to read the data
  userReference.on("value", 
    function(snapshot) {
        //console.log(snapshot.val());
        res.json(snapshot.val());
				userReference.off("value");
      }, 
      function (errorObject) {
      //console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
      });
});

module.exports = router;
