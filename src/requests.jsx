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

    if(!requests) return;
    if(requests.length === 0) return <h1> No Requests Found</h1>;

    
return (
  <div className=" text-center my-10">
    <h1 className="text-bold text-white text-4xl">Connections</h1>

    {requests.map((request) => {
      const { _id,firstname, lastname, photoUrl, skills, about } = request.fromUserId;
        

      return (
        <div className =  "flex  m-4 p-4 rounded-lg  bg-base-200 max-w-1/2 m-auto" key={request.id}>
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

    <div> Requests </div>
}
export default requests;