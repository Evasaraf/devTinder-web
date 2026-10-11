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

  if (!connections) return;

if (connections.length === 0) return <h1> No Connections Found</h1>;

return (
  <div className=" text-center my-10">
    <h1 className="text-bold text-2xl">Connections</h1>

    {connections.map((connection) => {
      const { firstname, lastname, photoUrl, age, gender, skills } =
        connection;

      return (
        <div className =  "m-4 p-4  bg-base-200" key={connection.id}>
          <div><img alt="photo" className="w-20 h-20" src={photoUrl} /></div>
           <div><h2> {firstname + " " + lastname}</h2></div>
          <p> {skills}</p>
        </div>
      );
    })}
  </div>
);
};

export default Connections;