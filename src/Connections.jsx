import axios from "axios";
import {BASE_URL} from "./utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addConnections } from "./utils/connectionSlice";

const Connections = () =>{
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();
    const fetchConnections = async () => {
        try{
           const res = await axios.get(BASE_URL + "/user/connections/accepted", { withCredentials: true });
           console.log(res.data.data);
           dispatch(addConnections(res.data.data));
        }
        catch(err){
         
        }
    };
    useEffect(() => {
        fetchConnections();
    }, []);

    if(!connections) return;
    if(connections.length === 0) return <h1> no connections found </h1>

    return <div className="flex justify-center my-10"> 
         <h1 className = "text-bold text-2xl"> Connections </h1>
          </div>
};
export default Connections;