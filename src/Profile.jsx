import { useSelector } from "react-redux";
import Footer from "./Footer";
import EditProfile from "./EditProfile";

const Profile = () => {
    const user = useSelector((store) => store.user);

    return (
        <div>
            <h1>Profile page</h1>
            <EditProfile user={user} />
            <Footer />
        </div>
    );
};

export default Profile;