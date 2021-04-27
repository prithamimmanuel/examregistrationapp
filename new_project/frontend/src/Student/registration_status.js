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

export default function RegistrationStatus() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dropClick, setdropClick] = useState(false);
  console.log("reached");

  const handle_submit = (e) => {
    e.preventDefault();
    console.log("reached");
    axios
      .post("http://localhost:5000/registrationstatus",{
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.error === "none") {
          console.log("response", res);
        } else {
          alert("ERROR ", res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const showExam = ()=>{
    let obj;
    if (dropClick){
      obj = (<div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>)
    } 
    else{
      obj=<div></div>
    } 
    return obj;
  }

  let obj = showExam();
  return (
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration status
        </Typography>
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_submit}
          >
            Download Hall Ticket
          </Button>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{setdropClick(true);}}
          >
            Show Exam List
          </Button>
          {obj}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_submit}
          >
            Reschedule Exam
          </Button>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_submit}
          >
            Pay Registration Fee
          </Button>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
