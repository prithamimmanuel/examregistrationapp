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



export default function ExamRegistration() {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handle_submit = (e) => {
        e.preventDefault();
        console.log("reached");
        axios
            .post("http://localhost:5000/examregistration", {
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>Enter your Age :</p>
                    <TextField
                        type="number"
                        InputProps={{
                            inputProps: {
                                max: 100, min: 10
                            }
                        }}
                        label=""
                    />
                    <p> Enter DOB:</p>
                    <TextField
                        id="DOB"
                        InputProps={{ inputProps: { min: "1970-01-01", max: "2016-05-04" } }}
                        label="DOB"
                        type="date"
                        defaultValue=""
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p> Enter Venue:</p>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="Venue"></InputLabel>
                        <Select
                            labelId="Venue"
                            id="venue_id"
                            
                        >
                            <MenuItem >Chennai-T Nagar</MenuItem>
                            <MenuItem >Chennai-KK Nagar</MenuItem>
                            <MenuItem >Chennai-Mylapore</MenuItem>
                            <MenuItem >Mumbai-Juhu</MenuItem>
                            <MenuItem >Mumbai-Bandra</MenuItem>
                            <MenuItem >Mumbai-Andheri West</MenuItem>
                            <MenuItem >Delhi-Patel Nagar</MenuItem>
                            <MenuItem >Delhi-Maya Nagar</MenuItem>
                            <MenuItem >Delhi-Lajpat Nagar</MenuItem>
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
