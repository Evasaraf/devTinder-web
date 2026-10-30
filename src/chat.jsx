import { useParams } from "react-router-dom";

function Chat() {
  const { targetUserId } = useParams();

  return (
    <div>
      <h1>Chat Page</h1>
      <p>Target User ID: {targetUserId}</p>
    </div>
  );
}

export default Chat;