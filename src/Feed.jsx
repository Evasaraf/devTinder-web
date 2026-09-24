import axios from "axios";
import BASE_URL from "./utils/constants";

const Feed = () => {

    const getfeed = async () => {

    const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
    }

},
export default Feed;
