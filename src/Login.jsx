import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("dhoni@gmail.com");
  const [password, setPassword] = useState("Dhoni@21");

  const handleLogin = async () => {
    // Handle login logic here
    try{
   const res = await axios.post("http://localhost:7777/login", { emailId, password });
    }
    catch(err){
        console.error(err);
     }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email ID</span>
                </div>
                <input
                  type="text"
                  value={emailId}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs py-5">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  value={password}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;