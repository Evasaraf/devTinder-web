const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstname, lastname, photoUrl, age, gender, about, skills, _id } = user;
  const dispatch = useDispatch();

  const handleSendRequest = (status) => {
    try{
     const res = axios.post(BASE_URL + "/request/send/" + status + "/" + user._id ,{},{ withCredentials: true });
     console.log("Request sent:", res.data.data);
    dispatch(removeUserFromFeed(user._id));
  }

    catch(err){

    }
  }

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl || null} alt="photo" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstname} {lastname}
        </h2>
        {age && gender && <p>{age + "," + gender}</p>}
        <p>{about || "this is the default about of the user."}</p>

        <div className="card-actions justify-end my-4">
          <button className="btn btn-primary onClick={() => handleSendRequest('ignore', _id)}">Ignore request</button>
          <button className="btn btn-secondary onClick={() => handleSendRequest('send', _id)}">Send request</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;