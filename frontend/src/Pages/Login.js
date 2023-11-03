import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: credentials.email,
        password: credentials.password,
      });

      if (response) {
        localStorage.setItem("authToken", response.data.authToken);
        console.log(localStorage.getItem("authToken"));
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Enter valid credentials");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-background">
      <div className="container vh-100">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <div className="bg-blue">
              <div className="card-header bg-primary text-white">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="text-white">
                      Email:
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-white">
                      Password:
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>
                  <button type="submit" className="mt-2 btn btn-info">
                    Log in
                  </button>
                </form>
              </div>
              <div className="text-center mt-3">
                <p className="text-light">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
