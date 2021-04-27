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
            const result1 = await db.execute("CREATE TABLE `my_db`.`students` (`student_id` INT NOT NULL AUTO_INCREMENT,`Name` VARCHAR(45) NOT NULL,`email` VARCHAR(45) NOT NULL,`password` VARCHAR(45) NOT NULL,PRIMARY KEY(student_id),UNIQUE INDEX idstudent_UNIQUE(student_id ASC) VISIBLE);");

            const result = await db.execute("CREATE TABLE `my_db`.`student_exam_details` (`exam_id` INT NOT NULL AUTO_INCREMENT,`student_id` INT NOT NULL,`Name` VARCHAR(45) NOT NULL,`Age` INT NOT NULL,`DOB` DATE NOT NULL,`Phone_no` VARCHAR(45) NOT NULL,`Address` VARCHAR(45) NOT NULL,`subject` VARCHAR(45) NOT NULL ,`Venue` VARCHAR(45) NOT NULL,`Exam_Date` DATE NOT NULL,`examcode` VARCHAR(45) NOT NULL,`seatno` VARCHAR(45) NOT NULL,`venue_id` NOT NULL,PRIMARY KEY (exam_id),FOREIGN KEY(student_id) REFERENCES students(student_id),FOREIGN KEY(venue_id) REFERENCES venue_data(venue_id));");
            
            const result3 = await db.execute("CREATE TABLE `my_db`.`venue_data` (`venue_id` VARCHAR(45) NOT NULL,`venue` VARCHAR(45) NOT NULL,`no_of_seats` INT NOT NULL,PRIMARY KEY(venue_id));");
       
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
            const result= await db.execute("drop table student_exam_details;");
            const result1= await db.execute("drop table students;");
            const result2=await db.execute("drop table exam_data;");
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
    //await obj.create_tables();
    await obj.insert_into_students_static();
    await obj.close_db();
}


