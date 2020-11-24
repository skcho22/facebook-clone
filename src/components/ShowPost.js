import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: "/images/fawad1.png",
      name: "Rick",
      time: "2h",
      text:
        "Some random stuff that is suppose to say something",
      postImg: "/images/pakistan.jpg",
    },
    {
      id: 2,
      userImg: "/images/fawad2.png",
      name: "Morty",
      time: "4h",
      text:
        "Rick and  morty season 6 please.......",
      postImg: "/images/imrankhan1.png",
    },
    {
      id: 3,
      userImg: "/images/fawad3.jpg",
      name: "Rahul",
      time: "2h",
      text:
        "conspiracy theory of morty taking over rick galaxy might be right this time.....",
      postImg: "/images/imrankhan3.jpg",
    },
    {
      id: 4,
      userImg: "/images/fawad4.jpg",
      name: "Tint Rick",
      time: "2h",
      text:
        "rick is the smartest guy in the galaxy....",
      postImg: "/images/imrankhanpost.png",
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
