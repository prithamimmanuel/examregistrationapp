import React, { useState, useEffect } from 'react';
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

export default function Deleteexam() {
    let x;

    const classes = useStyles();


    // const [name,setName] = useState("");

    // useEffect(()=>{
    //   axios.post('http://localhost:5000/studenthome',{
    //     id:id
    //   })
    //   .then((res)=>{
    //     setName(res.data.student.name);
    //   })
    //   .catch((e)=>console.log("ERROR: ",e));
    // })

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [exam_id, setExamid] = useState("");



    const handle_delete = (e) => {
        e.preventDefault();
        console.log("delete button clicked");
        axios
            .post("http://localhost:5000/deleteregistration", {
                exam_id: exam_id
            })
            .then((res) => {
                if (res.data.error === "no user") {
                    // window.location.href("url/studenthome/:s_email")
                    window.location.href = "../../";
                    console.log("response", res);
                } else {
                    console.log("response", res);
                    window.location.href = "../admin/home";

                }
            })
            .catch((err) => console.log(err));
    };

    //  const handle_exam_submit = e => {
    //    window.location.href = "www.google.com";
    //  }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome !
        </Typography>
                <Typography name="modify" component="h2" variant="h5">
                    {x}
                </Typography>

                <p>Enter your Unique Exam ID :</p>
                <TextField
                    type="number"
                    
                    name="exam_id"
                    onChange={(e) => setExamid(e.target.value)}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handle_delete}
                >
                    Delete Exam
          </Button>
                <br></br>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
