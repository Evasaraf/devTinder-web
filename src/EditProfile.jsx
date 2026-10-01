import { useState, useEffect } from "react";
import Footer from "./Footer";

const EditProfile = ({ user }) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [photoUrl, setphotoUrl] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState("");

    useEffect(() => {
        if (user) {
            setfirstname(user.firstname || "");
            setlastname(user.lastname || "");
            setphotoUrl(user.photoUrl || "");
            setAge(user.age || "");
            setGender(user.gender || "");
            setSkills(user.skills?.join(", ") || "");
        }
    }, [user]);

    return (
        <div>
            <h1>Edit profile</h1>

            <div className="flex justify-center my-10">
                <div className="card bg-base-300 w-96 shadow-xl">
                    <div className="card-body">

                        <h2 className="card-title justify-center">
                            Edit Profile
                        </h2>

                        {/* First Name */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Firstname</span>
                            </div>

                            <input
                                type="text"
                                value={firstname}
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setfirstname(e.target.value)}
                            />
                        </label>

                        {/* Last Name */}
                        <label className="form-control w-full max-w-xs py-5">
                            <div className="label">
                                <span className="label-text">Lastname</span>
                            </div>

                            <input
                                type="text"
                                value={lastname}
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setlastname(e.target.value)}
                            />
                        </label>

                        {/* Photo URL */}
                        <label className="form-control w-full max-w-xs py-5">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>

                            <input
                                type="text"
                                value={photoUrl}
                                placeholder="Type photo URL"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setPhotoUrl(e.target.value)}
                            />
                        </label>

                        {/* Age */}
                        <label className="form-control w-full max-w-xs py-5">
                            <div className="label">
                                <span className="label-text">Age</span>
                            </div>

                            <input
                                type="number"
                                value={age}
                                placeholder="Type age"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </label>

                        {/* Gender */}
                        <label className="form-control w-full max-w-xs py-5">
                            <div className="label">
                                <span className="label-text">Gender</span>
                            </div>

                            <select
                                value={gender}
                                className="select select-bordered"
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>

                        {/* Skills */}
                        <label className="form-control w-full max-w-xs py-5">
                            <div className="label">
                                <span className="label-text">Skills</span>
                            </div>

                            <input
                                type="text"
                                value={skills}
                                placeholder="Type skills"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </label>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">
                                Save Profile
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EditProfile;


