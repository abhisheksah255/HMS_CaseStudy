import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8090/authenticate", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        setShowAlert(true);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="form-control"
            placeholder="username"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="form-control"
            placeholder="*******"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {showAlert && (
        <div class="alert alert-danger" role="alert">
          Username or Password Incorrect! Please Try Again!
        </div>
      )}
    </div>
  );
}

export default Login;
