import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright Â© '}
      <Link color="inherit" href="https://localhost:3000/">
        Exam Registration System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginAdmin() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle_submit = (e) => {
    e.preventDefault();
    console.log("reached");
    axios
      .post("http://localhost:5000/adminhome",{
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.error === "none") {
          // window.location.href("url/adminhome/:s_email")
          console.log("response", res);
        } else {
          alert("ERROR ", res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const handle_view = (e) => {
    window.location.href="./viewseating"
  }

  const handle_delete = (e) => {
    window.location.href="./deleteregistration"
  }

  const handle_payment = (e) => {
    window.location.href = "./viewpayment"

  }

  const handle_all_students = (e) => {
    window.location.href = "./viewallexams"

  }

  // const handle_all_students = (e) => {
  //   e.preventDefault();
  //   console.log("reached all students");
  //   axios
  //     .post("http://localhost:5000/getallstudents",{
  //       dummy: "dummy"
  //     })
  //     .then((res) => {
  //       if (res.data.error === "none") {
  //         // window.location.href("url/studenthome/:s_email")
  //         // window.location.href = "../student/" + res.data.student_id;
  //         console.log("response", res);
  //       } else {
  //         console.log("response", res);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Home
        </Typography>
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_all_students}
          >
            Display All Exams
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_view}
          >
            View Seating Arrangements
          </Button>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_delete}
          >
            Cancel Registration
          </Button>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_payment}
          >
            Review Payment Status
          </Button>
          
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
