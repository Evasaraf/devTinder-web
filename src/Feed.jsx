import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import { BASE_URL } from "./utils/constants";
import UserCard from "./utils/UserCard.jsx";


const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getfeed = async () => {

    if(feed) return; // If feed data is already present, skip fetching

    try {
       const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
       dispatch(addFeed(res.data));
    }
     catch (error) {
         console.error("Error fetching feed:", error);
    }
}
useEffect(() => {
    getfeed();
}, []);

 return (
    feed && (
 <div className="flex justify-center my-10">
    <UserCard user = {feed[0]}/>
 </div>
 )
)
}
export default Feed;
