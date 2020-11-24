import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/fawad1.jpg", name: "Events" },
    { id: 2, image: "/images/fawad2.jpg", name: "Membership" },
    { id: 3, image: "/images/fawad3.jpg", name: "Rick and Morty Club" },
    { id: 4, image: "/images/fawad4.jpg", name: "Pickle rick" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
