const db=require("./sql_test.js");

var add_student = async function (data) {
    console.log(data);
    // try
    // {
    //     const result= await db.execute("insert into students (name, email, password) values (?, ?, ?);", (data));
    //     console.log(result[0]);
    // }
    // catch(err)
    // {
    //     console.log(err);
    // }
    // finally
    // {
    //     db.end();
    // }
}