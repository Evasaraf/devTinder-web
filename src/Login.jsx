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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const[isLoginForm, setisLoginForm] = useState(true);
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


  const handleSignup = async () => {
    try{
      const res = await axios.post( BASE_URL + "/signup", { firstname, lastname, emailId, password }, 
        { withCredentials: true } );
      dispatch(addUser(user.data));
     navigate("/profile");
    }
    catch(err){

    }
  }




  return (
    <div>
      <h1>Login Page</h1>
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Sign Up"}</h2>
            <div>
              {!isLoginForm && 
                <><label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First name</span>
                  </div>
                  <input
                    type="text"
                  value={firstname}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs py-5">
                <div className="label">
                  <span className="label-text">Last name</span>
                </div>
                <input
                  type="text"
                  value={lastname}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setlastname(e.target.value)}
                />
              </label> </>}

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
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
            </div>
          </div>
          <p className="text-center pb-5">{ 
            isLoginForm ? "Don't have an account?" : "Already have an account?"} 
            <span className="text-blue-500 cursor-pointer" 
            onClick={() => setisLoginForm(!isLoginForm)}>{isLoginForm ? "Sign Up" : "Login"}</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;