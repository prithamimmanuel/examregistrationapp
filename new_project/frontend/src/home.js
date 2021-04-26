import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
          <div className="mainhome">
            <title>Exam Registration System</title>
            <div>
              
              <br></br>
              
            </div>
            <div className="signin">
              Do you have an account? Log in
              <Link to="/login/student" className="in">
                Sign In
              </Link>
            </div>
            <div className="signup">
              Are you a new student? Sign up!
              <Link to="/register/student" className="in">
                Sign Up
              </Link>
            </div>
            <div className="signup">
              Admin? Sign in!
              <Link to="/login/admin" className="in">
                Sign in
              </Link>
            </div>
            
          </div>
      </div>
    );
  }
}