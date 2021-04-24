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

export default function StudentHome(props) {
  const classes = useStyles();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  let id = props.match.params.s_id;
  console.log(id);

  let x;

  const fetchData = callback => {
    const promise = new Promise(async (resolve, reject) => {
			
			try {
				let x = await axios.post("http://localhost:5000/studenthome",{
          id: id
        });
				resolve(x);
			} catch (err) {
				reject(err);
			}

		});
		return promise;		
  }

  fetchData().then(data => {
		x = data.data.student;
    console.log(x);
	}, err => {
		console.log(err);
	});

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Home
        </Typography>
        <Typography component="h2" variant="h5">
          Welcome
        </Typography>
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={handle_submit}
          >
            Register for Exam
          </Button>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={handle_submit}
          >
           Registration Status
          </Button>
          <br></br>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
