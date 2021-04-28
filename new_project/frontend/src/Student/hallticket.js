import React,{useState,useEffect} from 'react';
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
import { useParams } from 'react-router';


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



export default function Hallticket(props) {
    const classes = useStyles();

    console.log("Hello");
    function createData(add,age,DOB,e_date,s_name,ph_number,venue,e_id,paid,seat_number,s_id,sub,v_id) {
        return { add,age,DOB,e_date,s_name,ph_number,venue,e_id,paid,seat_number,s_id,sub,v_id};
      }

    let exam_id = props.match['params'].exam_id;
    let student_id = props.match['params'].s_id;

    const [exam,setExam] = useState("");

    console.log(props);

    // useEffect(()=>{
    //     axios.post('http://localhost:5000/examdetails',{
    //         exam_id:exam_id
    //     })
    //     .then((res)=>{
    //         setExam(res.data.exam[0]);
    //         // console.log(res.data);
    //     })
    //     .catch((e)=>console.log("ERROR: ",e));
    // },[])

    // console.log(exam[0]);

    // //for the seating table

    // //pullingo values


    // function createData(add, age, DOB, e_date, s_name, ph_number, venue, e_id, paid, seat_number, s_id, sub, v_id) {
    //     return { add, age, DOB, e_date, s_name, ph_number, venue, e_id, paid, seat_number, s_id, sub, v_id };
    // }

   
    // // let [rows,setRows]=useState([]);
    // let [rows, setRows] = useState([]);
    // //seating table stuff ends^

    // console.log("reached");
    
    // let rows1=[]
    // rows1.push(createData(exam.Address, exam.Age, exam.DOB, exam.Exam_Date, exam.Name, exam.Phone_no, exam.Venue, exam.exam_id, exam.paid, exam.seatno, exam.student_id, exam.subject, exam.venue_id));
    // setRows(rows1);
    const [submitClick,setsubmitClick] = useState(false);
    let [rows, setRows] = useState([]);
    const handle_submit = (e) => {
        e
        .preventDefault();
        setsubmitClick(true);

        console.log("bruhbruhbruh");
        axios
            .post("http://localhost:5000/examdetails", {           
                exam_id:exam_id
            })
            .then((res) => {
                // setsubmitClick(true);
                if (res.data.error === "none") {
                    console.log("response", res.data.exam);
                    
                    let rows1=[]
                    
                    
                    rows1.push(createData(res.data.exam[0].Address, res.data.exam[0].Age, res.data.exam[0].DOB, res.data.exam[0].Exam_Date, res.data.exam[0].Name, res.data.exam[0].Phone_no, res.data.exam[0].Venue, res.data.exam[0].exam_id, res.data.exam[0].paid, res.data.exam[0].seatno, res.data.exam[0].student_id, res.data.exam[0].subject, res.data.exam[0].venue_id));
                    
                    setRows(rows1);
                } else if (res.data.error === "student not found") {
                    window.location.href = "../../../";
                } else {
                    console.log("response", res);
                }
            })
            .catch((err) => console.log(err));
    };


    // const {exam_id}=useParams()
    // console.log("props=", props.match['params']);
    // console.log(exam_id);
    //let exam_id = props.match.params.exam_id;

    // const handle_submit = (e) => {
    //     e
    //         .preventDefault();
    //     setsubmitClick(true);
    //     console.log("bruhbruhbruh");
    //     axios
    //         .post("http://localhost:5000/examdetails", {
    //             exam_id: exam_id
    //         })
    //         .then((res) => {
    //             // setsubmitClick(true);
    //             if (res.data.error === "none") {
    //                 console.log("response", res);
    //                 console.log(res);


    //                 //set values for rows1 
    //                 // from 0-lenghtof response array:
    //                 // rows1.push(createData(res.data.correct aana vishwayam))
    //                 // let rows1 = [
    //                 //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //                 //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //                 //     createData('Eclair', 262, 16.0, 24, 6.0),
    //                 //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //                 //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //                 //   ];
    //                 // add,age,DOB,e_date,s_name,ph_number,venue,e_id,paid,seat_number,s_id,sub,v_id
    //                 let rows1 = []

    //                 console.log(res.data.seats.length);
    //                 for (let i = 0; i < res.data.seats.length; i++) {
    //                     rows1.push(createData(exam.Address, exam.Age, exam.DOB, exam.Exam_Date, exam.Name, exam.Phone_no, exam.Venue, exam.exam_id, exam.paid, exam.seatno, exam.student_id, exam.subject, exam.venue_id));
    //                 }
    //                 setRows(rows1);
    //             } else if (res.data.error === "student not found") {
    //                 window.location.href = "../../../";
    //             } else {
    //                 console.log("response", res);
    //             }
    //         })
    //         .catch((err) => console.log(err));
    // };
    let decideRender = ()=>{
        console.log("rows now= ",rows);
        let obj;
        if(submitClick){
            obj= (
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Exam Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Venue</TableCell>
            <TableCell align="right">Exam ID</TableCell>
            <TableCell align="right">Paid(y/n)</TableCell>
            <TableCell align="right">Seat Number</TableCell>
            <TableCell align="right">Student ID</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Venue ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="right">{row.add}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.DOB}</TableCell>
              <TableCell align="right">{row.e_date}</TableCell>
              <TableCell align="right">{row.s_name}</TableCell>
              <TableCell align="right">{row.ph_number}</TableCell>
              <TableCell align="right">{row.venue}</TableCell>
              <TableCell align="right">{row.e_id}</TableCell>
              <TableCell align="right">{row.paid}</TableCell>
              <TableCell align="right">{row.seat_number}</TableCell>
              <TableCell align="right">{row.s_id}</TableCell>
              <TableCell align="right">{row.sub}</TableCell>
              <TableCell align="right">{row.v_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            )
        }
        else
            obj =<div></div>;
    return obj;
    }
    let obj = decideRender();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <form className={classes.form} noValidate>
                    
                    
                                     
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e)=>{handle_submit(e);}}
                    >
                        Get Hall Ticket
          </Button>
        </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {obj}
        </Container>
    );

}