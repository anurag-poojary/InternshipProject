import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import axios from "axios";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name: credentials.name,
        password: credentials.password,
        email: credentials.email,
      });

      if (response.data.success) {
        toast.success("Account created");
        navigate('/');
      } else {
        toast.error("Enter valid credentials");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div className="container vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="bg-blue">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="text-white">Name:</label>
                  <input type="text" placeholder="Enter the Name" className="form-control" name="name" value={credentials.name} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-white">Email:</label>
                  <input type="email" placeholder="Enter email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-white">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className="m-3 btn btn-primary btn-block">
                  Sign In
                </button>
                <Link to='/login' className='m-3 btn btn-info'>Already a User</Link>
              </form>
              <hr className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
