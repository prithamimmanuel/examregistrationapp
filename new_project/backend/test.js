const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const attendance=require("./class_object.js");
// let obj=new attendance();
const add_student = require("./add_student");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var mongoDB = 'mongodb+srv://ssnboys:ssn123@examcluster.fldga.mongodb.net/exam_database?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var multiparty = require("multiparty");
var path = require("path");
const port = 5000;

//handling CORS errors
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type ,Accept,Authorisation');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "./enterDetails.html"));
// });

// STUDENT REGISTRATION 

app.post("/registerstudent", (req, res) => {
  


	// add req.body details to mongodb
	add_student(req.body);

	//do sql shit with fields.name (name currospionds to html)


});

// MAKING LOGINS 

app.post("/loginstudent", (req, res) => {
	console.log(req.body);
	//check the db for (req.password) and req.username


	//if username incorrect 
	// res.status(200).json({"error":"incorrect username"});
	// //if password incorrect 
	// res.status(200).json({"error":"incorrect password"});
	// else 
	res.status(200).json({"error":"none"});
});

app.post("/registerexam", (req, res) => {
	console.log(req.body);
	//check the db for (req.password) and req.username

	res.status(200).json({"error":"none"});
});

app.post("/loginteacher", (req, res) => {
	console.log(req.body.email);
	//use same hash function on req.password
	//check the db for hashed(req.pw) and req.username


	//if username incorrect 
	// res.status(200).json({"error":"incorrect username"});
	// //if pw incorrect 
	// res.status(200).json({"error":"incorrect password"});
	// else 
	res.status(200).json({"error":"none"});
});

app.post("/loginadmin", (req, res) => {
	console.log(req.body.email);
	//use same hash function on req.password
	//check the db for hashed(req.pw) and req.username


	//if username incorrect 
	// res.status(200).json({"error":"incorrect username"});
	// //if pw incorrect 
	// res.status(200).json({"error":"incorrect password"});
	// else 
	res.status(200).json({"error":"none"});
});

app.listen(port, () => {
  console.log("Server running!");
});
