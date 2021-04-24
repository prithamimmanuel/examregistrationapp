const db=require("./sql_test.js");

var show_student = async function (data) {

    // console.log(data);
    var x = [];
    x.push(data['email']);
    try
    {
        const result= await db.execute("select * from students where email = ?;", (x));
        return(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
    
};

module.exports = {show_student};