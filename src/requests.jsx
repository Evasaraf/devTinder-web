import axios from "axios";
import {BASE_URL} from "./utils/constants";
import { useDispatch } from "react-redux";
const requests = () =>{
    const dispatch = useDispatch();
    const fetchRequests = async() =>{
        try{
          const res = await axios.get (BASE_URL + "/user/requests/received", { withCredentials: true });
          dispatch(addRequets(res.data));
        }
        catch(err){
            console.error("Error fetching requests:", err);
        }

    };
    useEffect(()=>{
         fetchRequests();
    }, []);

    <div> Requests </div>
}
export default requests;