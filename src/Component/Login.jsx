import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Home from "./Home";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
    console.log(home);
  }

  return (
    <div className="cont">
      <div className="logins">
        {home ? (
                    <form onSubmit={handleLogin}>
                    {/* <h3>Login </h3> */}
                    <div className="form-groups">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(event) => setEmaillog(event.target.value)}
                      />
                    </div>
          
                    <div className="form-groups">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(event) => setPasswordlog(event.target.value)}
                      />
                    </div>
          
                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                      Login
                    </button>
          
                    {flag && (
                      <Alert color="primary" variant="warning">
                        Fill correct Info else keep trying.
                      </Alert>
                    )}
                  </form>
          
         
        ) : (<Navigate to="/" replace={true} />
        )}
      </div>
    </div>
  );
}

export default Login;