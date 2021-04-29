const db = require("./sql_test.js");
const db2 = require("./exam_db");

exports.loginstudent = (req, res) => {

	// console.log(req.body['email']);
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
			res.status(200).json({ "error": "no user" });
		} else {
			if (x['password'] != req.body['password']) {
				console.log("Incorrect password!");
				res.status(200).json({ "error": "password" });
			} else {
				console.log("Logged in!");
				res.status(200).json({ "error": "none", "student_id": x['student_id'] });

			}
		}

	}, err => {
		console.log(err);
	});

};

exports.studenthome = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select * from students where student_id = ?;", [req.body['id']]);
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
			res.status(200).json({ "error": "no user" });
		} else {
			console.log("User found!");
			res.status(200).json({ "error": "none", "student": x });
		}

	}, err => {
		console.log(err);
	});
}

exports.deletestudent = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("delete from student_exam_details where student_id = ?;", [req.body['id']]);
				x = await db.execute("delete from students where student_id = ?;", [req.body['id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {

		if (x == undefined) {
			console.log("User not found");
			res.status(200).json({ "error": "no user" });
		} else {
			console.log("User found!");
			res.status(200).json({ "error": "none" });
		}

	}, err => {
		console.log(err);
	});
}

exports.getallstudents = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select * from students;");
				console.log(x[0]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		// console.log(data);
		// console.log("/n/n/n/nstart");
		for (student in x) {
			console.log(x[student]['name']);
		}
		// console.log("end/n/n/n/n");
		if (x == undefined) {
			console.log("no clue what happened there");
			res.status(200).json({ "error": "db error" });
		} else {
			console.log("all good");
			res.status(200).json({ "error": "none", students: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.add_student = async function (data) {

	console.log(data);
	var x = [];
	for (item in data) {
		x.push(data[item]);
	}
	console.log(x);
	try {
		const result = await db.execute("insert into students (name, email, password) values (?, ?, ?);", x);
		console.log(result[0]);
	}
	catch (err) {
		console.log(err);
	}

};

exports.insert_student_details = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				console.log(req.body);
				let x = await db.execute("select * from students where student_id = ?;", [req.body['id']]);
				console.log(x[0]);

				if (x[0].length != 0) {
					let venue = await db.execute("select * from venue_data where venue = ?;", [req.body['venue']]);
					venue = venue[0][0];
					console.log(venue);
					let venue_size = venue['no_of_seats'];
					console.log(venue_size);

					let same_exams = await db.execute("select * from student_exam_details where venue = ? and exam_date = ?;", [req.body['venue'], req.body['DOE']]);
					same_exams = same_exams[0];
					console.log(same_exams);

					let seats = [];
					for (exam in same_exams) {
						seats.push(parseInt(same_exams[exam]['seatno']));
					}

					console.log("these are the seats");
					console.log(seats);

					let newseat;
					let i = 1;
					while (i <= venue_size) {
						if (seats.includes(i) == false) {
							newseat = i;
							break;
						}
						i++;
					}

					if (newseat == undefined) {
						resolve("no seats available");
					}

					let y = await db.execute("insert into student_exam_details (student_id, name, age, phone_no, address, subject, venue, exam_date, seatno, venue_id, DOB, paid) values(?,?,?,?,?,?,?,?,?,?,?,?);", [req.body['id'], req.body['name'], req.body['age'], req.body['phoneno'], req.body['address'], req.body['subject'], req.body['venue'], req.body['DOE'], newseat, venue['venue_id'], req.body['DOB'], "UNPAID"]);

				}

				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		// console.log(x);
		if (x == undefined) {
			console.log("no clue what happened there");
			res.status(200).json({ "error": "db error" });
		} else if (x.length == 0) {
			res.status(200).json({ "error": "student not found" });
		} else if (x == "no seats available") {
			res.status(200).json({ "error": "no seats available" });
		} else {
			console.log("all good");
			res.status(200).json({ "error": "none", students: x });
		}

	}, err => {
		console.log(err);
		res.status(200).json({ "error": "big error" });
	});
}

exports.getallvenues = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select * from venue_data;");
				console.log(x[0]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		for (student in x) {
			console.log(x[student]['name']);
		}
		if (x == undefined) {
			console.log("no clue what happened there");
			res.status(200).json({ "error": "db error" });
		} else {
			console.log("all good");
			res.status(200).json({ "error": "none", venues: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.seatsforvenueanddate = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				// let x = await db.execute("delete from students where student_id = ?;", [req.body['id']]);
				// resolve(x[0]);

				let same_exams = await db.execute("select * from student_exam_details where venue = ? and exam_date = ?;", [req.body['venue'], req.body['DOE']]);
				same_exams = same_exams[0];
				resolve(same_exams);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined) {
			console.log("No seats occupied.");
			res.status(200).json({ "error": "empty seats" });
		} else {
			console.log("User found!");
			res.status(200).json({ "error": "none", seats: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.payforexam = (req, res) => {
	let x;
	// console.log(req.body);
	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("update student_exam_details set paid = \"PAID\" where exam_id = ?;", [req.body['exam_id']]);
				x = await db.execute("select * from student_exam_details where exam_id = ?;", [req.body['exam_id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined) {
			console.log("no payment");
			res.status(200).json({ "error": "not paid" });
		} else {
			console.log("payment done!");
			res.status(200).json({ "error": "none", payment: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.allexamsstudentiswriting = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select * from student_exam_details where student_id = ?;", [req.body['student_id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined) {
			console.log("no payment");
			res.status(200).json({ "error": "empty seats" });
		} else {
			console.log("payment done!");
			res.status(200).json({ "error": "none", students_exams: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.examidsofstudent = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select exam_id from student_exam_details where student_id = ?;", [req.body['student_id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		let idlist = [];
		for (element in x) {
			idlist.push(x[element].exam_id);
		}
		console.log("x = ", x);
		if (x == undefined) {
			console.log("no payment");
			res.status(200).json({ "error": "empty seats" });
		} else {
			console.log("payment done!");
			res.status(200).json({ "error": "none", students_exams: idlist });
		}

	}, err => {
		console.log(err);
	});
}

exports.exam_details = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select * from student_exam_details where exam_id = ?;", [req.body['exam_id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined) {
			console.log("no exam");
			res.status(200).json({ "error": "no exam" });
		} else {
			console.log("yes exam");
			res.status(200).json({ "error": "none", exam: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.viewpayment = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select paid from student_exam_details where exam_id = ?;", [req.body['exam_id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined) {
			console.log("no exam");
			res.status(200).json({ "error": "no exam" });
		} else {
			console.log("yes exam");
			res.status(200).json({ "error": "none", exam: x });
		}

	}, err => {
		console.log(err);
	});
}

exports.deleteregistration = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("delete from student_exam_details where exam_id = ?;", [req.body['exam_id']]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {

		res.status(200).json({ "error": "exam deleted" });

	}, err => {
		res.status(200).json({ "error": "exam may not be deleted" });
		console.log(err);
	});
}

exports.reschedule_exam = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {

				let x = await db.execute("select * from student_exam_details where exam_id = ?;", [req.body['exam_id']]);
				x = x[0][0];
				console.log(x['Venue']);
				console.log(req.body['new_date']);

				let venue = await db.execute("select * from venue_data where venue = ?;", [x['Venue']]);
				venue = venue[0][0];
				console.log(venue);
				let venue_size = venue['no_of_seats'];
				console.log(venue_size);

				let same_exams = await db.execute("select * from student_exam_details where venue = ? and exam_date = ?;", [x['Venue'], req.body['new_date']]);
				same_exams = same_exams[0];
				console.log(same_exams);

				let seats = [];
				for (exam in same_exams) {
					seats.push(parseInt(same_exams[exam]['seatno']));
				}

				console.log("these are the seats");
				console.log(seats);

				let newseat;
				let i = 1;
				while (i <= venue_size) {
					if (seats.includes(i) == false) {
						newseat = i;
						break;
					}
					i++;
				}

				console.log(newseat);

				if (newseat == undefined) {
					resolve("no seats available");
				}

				x = await db.execute("update student_exam_details set Exam_Date = ? where exam_id = ?;", [req.body['new_date'], req.body['exam_id']]);
				resolve([]);

			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined || x == "no seats available") {
			console.log("rescheduling not done!");
			res.status(200).json({ "error": "no rescheduling" });
		} else {
			console.log("rescheduling done!");
			res.status(200).json({ "error": "none" });
		}

	}, err => {
		console.log(err);
	});
}

exports.modifyseating = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {

				let x = await db.execute("select * from student_exam_details where exam_id = ?;", [req.body['exam_id']]);
				x = x[0][0];
				console.log(x);

				let venue = await db.execute("select * from venue_data where venue = ?;", [x['Venue']]);
				venue = venue[0][0];
				console.log(venue);
				let venue_size = venue['no_of_seats'];
				console.log(venue_size);

				let same_exams = await db.execute("select * from student_exam_details where venue = ? and exam_date = ?;", [x['Venue'], x['Exam_Date']]);
				same_exams = same_exams[0];
				console.log(same_exams);

				let seats = [];
				for (exam in same_exams) {
					seats.push(parseInt(same_exams[exam]['seatno']));
				}

				console.log(seats);

				if (seats.includes(req.body["new_seat"]) == true) {
					resolve("seat already taken");
				} else {
					let y = await db.execute("update student_exam_details set seatno = ? where exam_id = ?;", [req.body['new_seat'], req.body['exam_id']]);
					resolve([]);
				}

				// 	x = await db.execute("update student_exam_details set Exam_Date = ? where exam_id = ?;", [req.body['new_date'], req.body['exam_id']]);
				// 	resolve([]);

			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined || x == "seat already taken") {
			console.log("seat change not done!");
			res.status(200).json({ "error": "no seat change" });
		} else {
			console.log("seat change done!");
			res.status(200).json({ "error": "none" });
		}

	}, err => {
		console.log(err);
	});
}

exports.displayallexams = (req, res) => {
	let x;

	const fetchData = callback => {
		const promise = new Promise(async (resolve, reject) => {

			try {
				let x = await db.execute("select * from student_exam_details;");
				console.log(x[0]);
				resolve(x[0]);
			} catch (err) {
				reject(err);
			}

		});
		return promise;
	};

	fetchData().then(data => {
		x = data;
		if (x == undefined) {
			console.log("no clue what happened there");
			res.status(200).json({ "error": "db error" });
		} else {
			console.log("all good");
			res.status(200).json({ "error": "none", exams: x });
		}

	}, err => {
		console.log(err);
	});
}