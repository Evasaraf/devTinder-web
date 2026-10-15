
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import { BASE_URL } from "./utils/constants";
import UserCard from "./utils/UserCard.jsx";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (feed !== null) return;

    const getFeed = async () => {
      try {
        const res = await axios.get(BASE_URL + "/feed", {
          withCredentials: true,
        });

        dispatch(addFeed(res.data));
      } catch (error) {
        console.error("Error fetching feed:", error);
      }
    };

    getFeed();
  }, [feed, dispatch]);

  if (feed === null) {
    return <p className="text-center my-10">Loading feed...</p>;
  }

  if (feed.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <p>No more users to show.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
