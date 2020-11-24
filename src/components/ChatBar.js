import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/fawad1.png", name: "Beth" },
    { id: 2, image: "/images/fawad2.png", name: "Jerry" },
    { id: 3, image: "/images/fawad3.jpg", name: "Meesicks" },
    { id: 4, image: "/images/fawad4.jpg", name: "Birdman" },
    { id: 5, image: "/images/imran1.jpg", name: "Morty" },
    { id: 6, image: "/images/imran2.jpg", name: "Unity" },
    { id: 6, image: "/images/imran3.png", name: "Random guy" },
    { id: 7, image: "/images/profile.png", name: "Aliens" },
    { id: 8, image: "/images/fawad1.png", name: "Vindicators" },
    { id: 9, image: "/images/fawad2.png", name: "King" },
    { id: 10, image: "/images/fawad3.jpg", name: "Mars" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
