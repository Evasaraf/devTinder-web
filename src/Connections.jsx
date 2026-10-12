import axios from "axios";
import {BASE_URL} from "./utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionSlice";

const Connections = () =>{
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const fetchConnections = async () => {
        try{
           const res = await axios.get(BASE_URL + "/user/connections/accepted", { withCredentials: true });
           console.log(res.data.data);
           dispatch(addConnections(res.data.data));
        }
        catch(err){
            console.error("Error fetching connections:", err);
            setError("Could not load connections.");
        }
    };
    useEffect(() => {
        fetchConnections();
    }, []);

  if (!connections) {
    return <h1 className="my-10 text-center">{error || "Loading connections..."}</h1>;
  }

if (connections.length === 0) return <h1> No Connections Found</h1>;

return (
  <div className=" text-center my-10">
    <h1 className="text-bold text-white text-4xl">Connections</h1>

    {connections.map((connection) => {
      const { firstname, lastname, photoUrl, skills, about } =
        connection;

      return (
        <div className =  "flex  m-4 p-4 rounded-lg  bg-base-200 max-w-1/2 m-auto" key={connection.id}>
          <div><img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} /></div>
          <div className = "text-left mx-4">
            <h2 className = "font-bold text-lg"> {firstname + " " + lastname}</h2>
          </div>
          <p> {skills}</p> 
          <p> {about}</p>
        </div>
      );
    })}
  </div>
);
};

export default Connections;