const db=require("./sql_test.js");

exports.loginstudent = (req, res) => {
	
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {
			
			try {
				let x = await db.execute("select * from students where email = ?;", [req.body['email']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;		
	};

	fetchData().then(data => {
		x = data[0];
		console.log(x);

		if (x == undefined) {
			console.log("User not found");
			res.status(200).json({"error":"no user"});
		} else {
			if (x['password'] != req.body['password']) {
				console.log("Incorrect password!");
				res.status(200).json({"error":"password"});
			} else {
				console.log("Logged in!");
				res.status(200).json({"error":"none", "student_id": x['student_id']});

			}
		}

	}, err => {
		console.log(err);
	});
	
};

exports.student_home = (req, res) => {

    console.log(req);

}