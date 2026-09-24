import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { addUser } from "./utils/userslice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate();
  const userData = useSelector((store) => store.user);


  const fetchUser = async () => {
    if(userData) return; // If user data is already present, skip fetching
    try {
      const user = await axios.get(BASE_URL + "/profile/view", { withCredentials: true });
      dispatch(addUser(user.data));
    } catch (error) {
      if(error.response?.status === 401){
        Navigate("/login");
      }
      console.error("Error fetching user:", error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Body;