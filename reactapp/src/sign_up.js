import React from "react";
import "./css/sign_up.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
function SignUp() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");

  //   Nice job on connecting the front end to back end! 
  //   One suggesstion is that adding autocomplete attributes in 'input' element can get rid of the warning from React.
  //   Also, it is better to use 'htmlFor' instead of 'for' in React as htmlFor is the word used by JSX.
  
  return (
    <div role="main">
      <div className="SignUp">
        <div className="container-fluid d-flex justify-content-center">
          <div className="signcard">
            <div className="card-header">
              <h1 id="h3">Sign Up</h1>
            </div>
            <div className="card-body">
              <form action="/auth/signup" method="POST">
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Alice"
                  />
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="123abc"
                  />
                </div>
                <div className="form-group">
                  <label for="password2">Verify Password</label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    placeholder="123abc"
                  />
                </div>
                {error ? <div className="danger">{error}</div> : ""}
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    style={{ marginTop: "10px" }}
                    value="Sign Up"
                  />
                </div>
                <div className="form-group">
                  Already an user? <Link to="/signin">Sign In</Link>
                  <br />
                  <Link to="/">Cancel and return home</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
