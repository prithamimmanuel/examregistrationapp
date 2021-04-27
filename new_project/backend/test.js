const express = require("express");
const mongoose = require("mongoose");
const app = express();

const test_controller = require("./testController");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


var path = require("path");
const port = 5000;

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type ,Accept,Authorisation');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.post("/registerstudent", (req, res) => {  
	test_controller.add_student(req.body);
});

app.post("/loginstudent", test_controller.loginstudent);

app.post("/studenthome", test_controller.studenthome);

app.post("/deletestudent", test_controller.deletestudent);

app.post("/getallstudents", test_controller.getallstudents);

app.post("/examregistration", test_controller.insert_student_details);

app.post("/getallvenues", test_controller.getallvenues);

app.post("/seatsforvenueanddate", test_controller.seatsforvenueanddate);

app.listen(port, () => {
  console.log("Server running!");
});
