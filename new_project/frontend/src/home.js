import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
          <div className="mainhome">
            <title>Covid-19 Patient Monitor</title>
            <div>
              <header className="heading">
                Covid-19 Patient Monitor System
              </header>
              <br></br>
              <div className="description">
                Welcome ! This system allows doctors to monitor vital
                information about a patient. Patients can provide their details
                to the server , and admins can manage these profiles
              </div>
            </div>
            <div className="signin">
              Do you have an account? Log in
              <Link to="/login/student" className="in">
                Sign In
              </Link>
            </div>
            <div className="signup">
              Are you a new Patient? Sign up!
              <Link to="/register/student" className="in">
                Sign Up
              </Link>
            </div>
          </div>
      </div>
    );
  }
}