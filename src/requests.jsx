
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./utils/constants";


const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/requests/received",
        { withCredentials: true }
      );

      console.log("Received requests:", res.data.data);
      setRequests(res.data.data || []);
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Could not load requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) return <h1>Loading requests...</h1>;

  if (error) return <h1>{error}</h1>;

  if (requests.length === 0) {
    return <h1 className="text-center my-10">No Requests Found</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-2xl font-bold">Received Requests</h1>

      {requests.map((request) => {
        const user = request.fromUserId;

        if (!user) return null;

        const {
          _id,
          firstname,
          lastname,
          photoUrl,
          skills,
          about
        } = user;

        return (
          <div
            className="flex items-center m-4 p-4 rounded-lg bg-base-200 max-w-xl mx-auto"
            key={request._id}
          >
            <img
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
              src={photoUrl}
            />

            <div className="text-left mx-4">
              <h2 className="font-bold text-lg">
                {firstname} {lastname}
              </h2>
              <p>{skills?.join(", ")}</p>
              <p>{about}</p>
              <div>
               <button className="btn btn-primary m-2">Accept</button>
               <button className="btn btn-secondary m-2">Decline</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
