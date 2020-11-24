import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/fawad1.png", name: "Events" },
    { id: 2, image: "/images/fawad2.png", name: "Programs" },
    { id: 3, image: "/images/fawad3.jpg", name: "Rick and Morty Club" },
    { id: 4, image: "/images/fawad4.jpg", name: "Membership" },
    { id: 5, image: "/images/imran1.jpg", name: "Something" },
    { id: 6, image: "/images/imran2.jpg", name: "Morty" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
