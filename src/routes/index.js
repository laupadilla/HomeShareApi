var express = require('express');
var router = express.Router();

//exemplo inicio firebase config
var firebase = require("firebase-admin");
var serviceAccount = require("../../serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://homesharebackend-b21d5.firebaseio.com"
});
var db = firebase.database();
// -- exemplo inicio firebase config

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
