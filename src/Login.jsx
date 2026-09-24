import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userslice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";


const Login = () => {
  const [emailId, setEmailId] = useState("dhoni@gmail.com");
  const [password, setPassword] = useState("Dhoni@21");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try{
   const res = await axios.post( BASE_URL + "/login", { emailId, password }, { withCredentials: true } );
//  console.log(res.data);
//  dispatch(addUser(res.data));
   const user = await axios.get(
    BASE_URL + "/profile/view",
    { withCredentials: true }
);
 // console.log(user.data);
  dispatch(addUser(user.data));
     navigate("/");
    }
    catch(err){
      const status = err?.response?.status;
      setError(status === 401 ? "Invalid credentials" : "Unable to log in. Please try again.");
      console.error(err?.response?.data || err.message || "Something went wrong");
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
            <p className="text-red-500">{error}</p>
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