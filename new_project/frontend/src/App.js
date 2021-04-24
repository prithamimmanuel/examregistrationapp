//Imports for react compnents/functions
import React, { Component } from "react";
//Imports for porject components
// import { DoctorLayout } from "./UI/doctor_ui";
// import { PatientLayout } from "./UI/patient_ui";
// import { AdminLayout } from "./UI/admin_ui";
// import { SignUp } from "./UI/signup";
import LoginStudent from "./Login/login_student";
import RegisterStudent from "./Login/register_student";
import LoginAdmin from "./Login/login_admin";
import AdminHome from "./Admin/admin_home";
import StudentHome from "./Student/student_home";
import RegistrationStatus from "./Student/registration_status";
import ExamRegistration from "./Student/register_exam";
// import LoginTeacher from "./Login/login_teacher";
import {Home} from "./home";
// import { Home2 } from "./UI/home2";
import { Route, BrowserRouter } from "react-router-dom";
// import { VitalsTable2 } from "./components/vitalstable2";
//Import for styles
// import "./styles/App.css";

class App extends Component {
  //set host url here

  url = "http://localhost:3000";
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route
            path={"/login/student"}
            exact
            render={(props) => {
              return <LoginStudent/>;
            }}
          />
          <Route
            path="/register/student"
            exact
            render={(props) => {
              return <RegisterStudent/>;
            }}
          />
          <Route
            path="/login/admin"
            exact
            render={(props) => {
              return <LoginAdmin/>;
            }}
          />
          <Route
            path="/adminhome"
            exact
            render={(props) => {
              return <AdminHome/>;
            }}
          />
          <Route
            path="/studenthome"
            exact
            render={(props) => {
              return <StudentHome/>;
            }}
          />
          <Route
            path="/registrationstatus"
            exact
            render={(props) => {
              return <RegistrationStatus/>;
            }}
          />
          <Route
            path="/examregistration"
            exact
            render={(props) => {
              return <ExamRegistration />;
            }}
          />
          {/* <Route
            path="/login/teacher"
            exact
            render={(props) => {
              return <LoginTeacher/>;
            }}
          /> */}
          {/* <Route
            path="/doctor/:d_id"
            exact
            render={(props) => {
              return <DoctorLayout {...props} url={this.url} />;
            }}
          />
          <Route
            path="/patient/:p_id"
            exact
            render={(props) => {
              return <PatientLayout {...props} url={this.url} />;
            }}
          />
          <Route
            path="/admin/:a_id"
            exact
            render={(props) => {
              return <AdminLayout {...props} url={this.url} />;
            }}
          />
          <Route
            path="/vitals/:p_id"
            exact
            render={(props) => {
              return <VitalsTable2 {...props} url={this.url} />;
            }}
          /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
