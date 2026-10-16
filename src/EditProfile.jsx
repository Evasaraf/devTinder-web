
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Footer from "./Footer";
import UserCard from "./utils/UserCard";
import { BASE_URL } from "./utils/constants";
import { addUser } from "./utils/userslice";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Prefill profile fields with the logged-in user's existing data
  useEffect(() => {
    if (user) {
      setfirstname(user.firstname || "");
      setlastname(user.lastname || "");
      setPhotoUrl(user.photoUrl || "");
      setAge(user.age ?? "");
      setGender(user.gender || "");
      setSkills(
        Array.isArray(user.skills) ? user.skills.join(", ") : ""
      );
      setAbout(user.about || "");
      setError(null);
    }
  }, [user]);

  const saveProfile = async () => {
    setError(null);

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstname,
          lastname,
          photoUrl,
          age: age === "" ? undefined : Number(age),
          gender,
          skills: skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
          about,
        },
        {
          withCredentials: true,
        }
      );

      console.log("PROFILE UPDATE RESPONSE:", res.data);

      // Use the updated user returned by the backend
      const updatedUser =
        res.data?.data ?? res.data?.user ?? res.data;

      dispatch(addUser(updatedUser));

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error(
        "PROFILE UPDATE ERROR:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
        (typeof err.response?.data === "string"
          ? err.response.data
          : "Unable to save profile. Please try again.")
      );
    }
  };

  return (
    <div>
      <div className="flex justify-center my-10">
        <div>
          <h1>Edit profile</h1>

          <div className="flex justify-center my-10 mx-10">
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
                    onChange={(e) =>
                      setfirstname(e.target.value)
                    }
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
                    onChange={(e) =>
                      setlastname(e.target.value)
                    }
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
                    onChange={(e) =>
                      setPhotoUrl(e.target.value)
                    }
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
                    onChange={(e) =>
                      setAge(e.target.value)
                    }
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
                    onChange={(e) =>
                      setGender(e.target.value)
                    }
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
                    placeholder="Type skills separated by commas"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSkills(e.target.value)
                    }
                  />
                </label>

                {/* About */}
                <label className="form-control w-full max-w-xs py-5">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>

                  <textarea
                    value={about}
                    placeholder="Type about"
                    className="textarea textarea-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setAbout(e.target.value)
                    }
                  />
                </label>

                {/* Save Button */}
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-primary"
                    onClick={saveProfile}
                  >
                    Save Profile
                  </button>
                </div>

                {error && (
                  <p className="text-red-500 mt-2">
                    {typeof error === "string"
                      ? error
                      : "Unable to save profile. Please try again."}
                  </p>
                )}
              </div>
            </div>
          </div>

          <Footer />
        </div>

        {/* Live Preview Card */}
        <UserCard
          user={{
            firstname,
            lastname,
            photoUrl,
            age,
            gender,
            skills: skills
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean),
            about,
          }}
        />
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;


