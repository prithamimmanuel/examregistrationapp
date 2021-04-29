import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const [add, setAdd] = useState("");
const [age, setAge] = useState("");
const [DOB, setDOB] = useState("");
const [e_date, setEdate] = useState("");
const [s_name, setSname] = useState("");
const [ph_number, setPhnumber] = useState("");
const [venue, setVenue] = useState("");
const [e_id, setEid] = useState("");
const [paid, setPaid] = useState("");
const [seat_number, setSno] = useState("");
const [s_id, setSid] = useState("");
const [sub, setSub] = useState("");
const [v_id, setVid] = useState("");

function createData(add,age,DOB,e_date,s_name,ph_number,venue,e_id,paid,seat_number,s_id,sub,v_id) {
  return { add,age,DOB,e_date,s_name,ph_number,venue,e_id,paid,seat_number,s_id,sub,v_id};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ViewTable() {
  const classes = useStyles();

  return (
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
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.venue_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
