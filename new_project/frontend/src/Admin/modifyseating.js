import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NativeSelect from '@material-ui/core/NativeSelect';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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



export default function ModifySeating(){

    const classes = useStyles();

    const [exam_id,setExamID] = useState("");
    const [seat_no,setSeatno] = useState("");

    const handle_submit = (e) =>{
        e.preventDefault();
        axios
            .post("http://localhost:5000/modifyseating", {
                exam_id: exam_id,
                new_seat: seat_no
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

    


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
        <div>
        <form className={classes.form} noValidate>

        <p>Enter the Exam ID :</p>
            <TextField
                type="number"
                name="exam_id"
                onChange={(e) => setExamID(e.target.value)}
            />
        <p>Enter the New Seat Number :</p>
            <TextField
                type="number"
                name="seat_no"
                onChange={(e) => setSeatno(e.target.value)}
            />
        
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handle_submit}
        >
            Change seat
        </Button>
        </form>
        </div>
        </Container>
    )
}