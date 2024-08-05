import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./chatList.css";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore ASTRABOT</Link>
      <Link to="/">Contact</Link>
     
      <span className="title">RECENT CHATS</span>

      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? `Something went wrong: ${error.message}`
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr/>

      <div className="upgrade">
        <img src="/logo1.png" alt="ASTRABOT Logo" />
        <div className="texts">
          <span>Upgrade to ASTRABOT</span>
          <span>Access to All features</span>
        </div>
      </div>
    </div>
  );
}

export default ChatList;