import { useState } from "react";
import Footer from "./Footer";
const EditProfile = ()=>{
      const [Firstname, setFirstname] = useState("");
      const [Lastname, setLastname] = useState("");
      const[age, setAge] = useState();
      const [gender, setGender] = useState();
      const [skills, setskills] = useState();
      const [error, setError] = useState("");
    return (
    <div>
      <h1>Edit profile</h1>
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Firstname </span>
                </div>
                <input
                  type="text"
                  value={Firstname}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs py-5">
                <div className="label">
                  <span className="label-text">Lastname </span>
                </div>
                <input
                  type="text"
                  value={Lastname}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}
export default EditProfile;