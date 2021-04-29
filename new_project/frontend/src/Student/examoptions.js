import React from 'react'
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
      width: '50%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function ExamOptions(props) {
    const classes = useStyles();
    console.log("props= ",props.match.params.exam_id);
    let s_id = props.match.params.s_id
    let exam_id=props.match.params.exam_id

  const handle_hall = (e) => {
    window.location.href = "./hallticket/" + exam_id;
  };

  const handle_schedule = (e) => {
    window.location.href = "./reschedule/" + exam_id;
  };

    const handle_pay = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/payforexam", {
        exam_id: exam_id
      })
      .then((res) => {
        if (res.data.error === "no user") {
          // window.location.href("url/studenthome/:s_email")
          window.location.href = "../../";
          console.log("response", res);
        } else {
          console.log("response", res);
          window.location.href = "../../../student/" + s_id; 
        }
      })
      .catch((err) => console.log(err));
  };

    return (
        <div>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_hall}
          >
            View Hall Ticket
          </Button>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_schedule}
          >
            Reschedule Exam
          </Button>
          <br></br>t
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_pay}
          >
            Pay Registration Fee
          </Button>
        </div>
    )
}
