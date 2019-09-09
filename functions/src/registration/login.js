const {
	db,
} = require('../../src/db');

const login = (req, res) => {
	var userReference = db.ref("/Users/");

	userReference.on("value", 
    	function(snapshot) {
        	res.json(snapshot.val());
				userReference.off("value");
      	}, 
      	function (errorObject) {
        	res.send("The read failed: " + errorObject.code);
      	});
};

module.exports = login;