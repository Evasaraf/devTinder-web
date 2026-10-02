const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstname, lastname, photoUrl, age, gender, about, skills } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstname} {lastname}
        </h2>
        {age && gender && <p>{age + "," + gender}</p>}
        <p>{about || "this is the default about of the user."}</p>

        <div className="card-actions justify-end my-4">
          <button className="btn btn-primary">Ignore request</button>
          <button className="btn btn-secondary">Send request</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;