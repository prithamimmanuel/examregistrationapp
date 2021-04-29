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



export default function ExamRegistration(props) {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [DOB, setDOB] = useState("");
    const [address, setAddress] = useState("");
    const [venue, setVenue] = useState("");
    const [subject, setSubject] = useState("");
    const [DOE, setDOE] = useState("");

    console.log("reached");

    let id = props.match.params.s_id;
    console.log(id); 

    const handle_submit = (e) => {
        e.preventDefault();
        console.log("bruhbruhbruh");
        axios
            .post("http://localhost:5000/examregistration", {
                id: id,
                name: name,
                age: age,
                phoneno: phoneno,
                DOB: DOB,
                address: address,
                venue: venue,
                subject: subject,
                DOE: DOE,
            })
            .then((res) => {
                if (res.data.error === "none") {
                    console.log("response", res);
                    window.location.href="../" + id;
                } else if (res.data.error === "student not found") {
                    window.location.href = "../../../";
                } else {
                    console.log("response", res);
                }
            })
            .catch((err) => console.log(err));
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Register For examination
                </Typography>

                <form className={classes.form} noValidate>
                    <p>Enter your name :</p>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p>Enter your Age :</p>
                    <TextField
                        type="number"
                        InputProps={{
                            inputProps: {
                                max: 100, min: 10
                            }
                        }}
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <p> Enter DOB:</p>
                    <TextField
                        id="DOB"
                        InputProps={{ inputProps: { min: "1970-01-01", max: "2016-05-04" } }}
                        label="DOB"
                        name="DOB"
                        type="date"
                        defaultValue=""
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setDOB(e.target.value)}
                    />

                    <p>Enter your Phone Number :</p>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phoneno"
                        label="phoneno"
                        name="phoneno"
                        autoFocus
                        onChange={(e) => setPhoneno(e.target.value)}
                    />
                    <p>Enter Address :</p>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="address"
                        name="address"
                        autoFocus
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <p> Subject</p>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="Subject"></InputLabel>
                        <Select
                            labelId="Subject"
                            id="subject_id"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <MenuItem value = "GRE">GRE</MenuItem>
                            <MenuItem value = "GMAT">GMAT</MenuItem>
                            <MenuItem value = "IELTS">IELTS</MenuItem>
                            <MenuItem value = "TOEFL">TOEFL</MenuItem>
                        </Select>
                    </FormControl>
                    <p> Enter Venue:</p>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel id="Venue"></InputLabel>
                        <Select
                            labelId="Venue"
                            id="venue_id"
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                        >
                            <MenuItem value="Chennai-T Nagar">Chennai-T Nagar</MenuItem>
                            <MenuItem value="Chennai-KK Nagar">Chennai-KK Nagar</MenuItem>
                            <MenuItem value="Chennai-Mylapore">Chennai-Mylapore</MenuItem>
                            <MenuItem value="Chennai-Juhu">Mumbai-Juhu</MenuItem>
                            <MenuItem value="Mumbai-Bandra">Mumbai-Bandra</MenuItem>
                            <MenuItem value="Mumbai-Andheri West">Mumbai-Andheri West</MenuItem>
                            <MenuItem value="Delhi-Patel Nagar">Delhi-Patel Nagar</MenuItem>
                            <MenuItem value="Delhi-Maya Nagar">Delhi-Maya Nagar</MenuItem>
                            <MenuItem value="Delhi-Lajpat Nagar">Delhi-Lajpat Nagar</MenuItem>
                        </Select>
                    </FormControl>
                    <p> Enter Prefered Date of Examination:</p>
                    <TextField
                        id="date"
                        InputProps={{ inputProps: { min: "2021-05-01", max: "2025-05-04" } }}
                        label="Exam Date"
                        type="date"
                        defaultValue=""
                        className={classes.textField}
                        onChange={(e) => setDOE(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handle_submit}
                    >
                        Submit
          </Button>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );

}