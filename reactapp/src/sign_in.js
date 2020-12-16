import React from "react";
import "./css/sign_in.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SignIn() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  return (
    <div role="main">
      <div className="SignIn">
        <div className="container-fluid d-flex justify-content-center">
          <div className="signcard">
            <div className="card-header">
              <h1 id="h3">Sign In</h1>
            </div>
            <div className="card-body">
              <form action="/auth/signin" method="POST">
                <div className="form-group">
                  <label for="inputUserName">Username</label>
                  <input
                    aria-label="Username"
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Alice"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label for="inputPassword">Password</label>
                  <input
                    aria-label="Password"
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="123abc"
                    name="password"
                  />
                </div>
                <br />
                {error ? <div className="danger">{error}</div> : ""}

                <div className="form-group">
                  <input
                    aria-label="Submit"
                    type="submit"
                    className="btn btn-dark"
                    style={{ marginTop: "10px" }}
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="signup-link">
                <Link to="/signup">Sign up here</Link>
              </div>
              <div className="signup-link">
                <Link to="/">Cancel and return home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
