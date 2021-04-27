import React, { Component } from "react";

import LoginStudent from "./Login/login_student";
import RegisterStudent from "./Login/register_student";
import LoginAdmin from "./Login/login_admin";
import AdminHome from "./Admin/admin_home";
import StudentHome from "./Student/student_home";
import RegistrationStatus from "./Student/registration_status";
import ExamRegistration from "./Student/register_exam";
import {Home} from "./home";
import ExamOptions from "./Student/examoptions"
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  //set host url here

  new_url = "http://localhost:3000";
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
            path="/admin/home"
            exact
            render={(props) => {
              return <AdminHome/>;
            }}
          />
          <Route
            path="/examoptions/:s_id/:exam_id"
            exact
            render={(props) => {
              return <ExamOptions {...props}/>;
            }}
          />
          {/* <Route
            path="/studenthome"
            exact
            render={(props) => {
              return <StudentHome/>;
            }}
          /> */}
          
          
          
          {/* <Route
            path="/login/teacher"
            exact
            render={(props) => {
              return <LoginTeacher/>;
            }}
          /> */}

          <Route
            path="/student/:s_id"
            exact
            render={(props) => {
              return <StudentHome {...props}  />;
            }}
          />
          <Route
            path="/student/examregistration/:s_id"
            exact
            render={(props) => {
              return <ExamRegistration {...props} />;
            }}

          />
          <Route
            path="/student/registrationstatus/:s_id"
            exact
            render={(props) => {
              return <RegistrationStatus {...props} />;
            }}
            
          />
          {/* <Route
            path="/patient/:p_id"
            exact
            render={(props) => {
              return <PatientLayout {...props} url={this.url} />;
            }}
          /> */}
          {/* // <Route
          //   path="/admin/:a_id"
          //   exact
          //   render={(props) => {
          //     return <AdminLayout {...props} url={this.url} />;
          //   }}
          // />
          // <Route
          //   path="/vitals/:p_id"
          //   exact
          //   render={(props) => {
          //     return <VitalsTable2 {...props} url={this.url} />;
          //   }}
          // /> */} 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
