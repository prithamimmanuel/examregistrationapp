const db=require("./sql_test.js");

var add_student = async function (data) {

    console.log(data);
    var x = [];
    for (item in data) {
        x.push(data[item]);
    }
    console.log(x);
    try
    {
        const result= await db.execute("insert into students (name, email, password) values (?, ?, ?);", x);
        console.log(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
    
};

module.exports = {add_student};