var db = require('./sql_test.js');
var mysql=require('mysql');
class exam
{
    constructor()
    {

    }
    async create_tables()
    { 
        await new Promise(r => setTimeout(r, 1000));
        try
        {
            const result= await db.execute("CREATE TABLE `my_db`.`exam_details` (`Name` VARCHAR(45) NOT NULL,`Age` INT NOT NULL,`DOB` DATE NOT NULL,`Phone_no` VARCHAR(45) NOT NULL,`Address` VARCHAR(45) NOT NULL,`Venue` VARCHAR(45) NOT NULL,`Exam_Date` DATE NOT NULL,`Email_Id` VARCHAR(45) NOT NULL,PRIMARY KEY (`Email_Id`),UNIQUE INDEX `Email_Id_UNIQUE` (`Email_Id` ASC) VISIBLE);");
            const result1 = await db.execute("CREATE TABLE `my_db`.`students` (`student_id` INT NOT NULL AUTO_INCREMENT,`Name` VARCHAR(45) NOT NULL,`email` VARCHAR(45) NOT NULL,`password` VARCHAR(45) NOT NULL,PRIMARY KEY(student_id),UNIQUE INDEX idstudent_UNIQUE(student_id ASC) VISIBLE);");
        }
        catch(err)
        {
            console.log(err)
        }
    }
    async  delete_tables()
        {
            await new Promise(r => setTimeout(r, 1000));
            
        try
        {
            const result= await db.execute("drop table exam_details;");
            const result1= await db.execute("drop table students;");
            console.log("final table dropped")
        }
        catch(err)
        {
            console.log(err);
        }
        }   

    async insert_into_students_static() {
        await new Promise(r => setTimeout(r, 1000));

        try {
            const result1 = await db.execute("insert into students values(1,'isap','isap@gmail.com','isap')");
            const result2 = await db.execute("insert into students values(2,'abc','abc@gmail.com','abc')");
            const result3 = await db.execute("insert into students values(3,'xyz','xyz@gmail.com','xyz')");
            

            
        }
        catch (err) {
            console.log(err);
        }
    }
    
    async close_db()
        {
            await db.end();
        } 
}

async function tester()
{
    let obj= new exam();
    //await obj.delete_tables();
    await obj.create_tables();
    await obj.insert_into_students_static();
    await obj.close_db();
}


tester();

