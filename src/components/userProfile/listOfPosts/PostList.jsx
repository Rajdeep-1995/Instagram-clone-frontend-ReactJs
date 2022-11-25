import React, { Fragment } from "react";
import { useState } from "react";
import "./postList.css";

export const PostList = ({
  userName,
  isPostPage,
  isSavedPostPage,
  isTaggedPostPage,
}) => {
  const handleMouseOver = (val) => {
    console.log("mouse is over!", val);
  };

  const handleMouseLeave = () => {
    console.log("mouse is down!");
  };

  let dummyData = [
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 40,
      comment: 21,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 112,
      comment: 52,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 67,
      comment: 11,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 90,
      comment: 49,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 30,
      comment: 7,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 95,
      comment: 49,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 41,
      comment: 10,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 80,
      comment: 23,
    },
    {
      url: "https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg",
      like: 100,
      comment: 78,
    },
  ];

  const [images, setImages] = useState(dummyData);

  return (
    <Fragment>
      <div className="post_canvas">
        {images.map((ar, i) => (
          <>
            <div key={i} className="post_img_grid">
              <div className="post_hover_data">
                <div className="like_static_icon"></div>
                <span>{ar.like}</span>
                <div className="comment_static_icon"></div>
                <span>{ar.comment}</span>
              </div>
              <img src={ar.url} />
            </div>
          </>
        ))}
        {/* <div
          className="post_img_grid"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="post_hover_data">
            <div className="like_static_icon"></div>
            <span>100</span>
            <div className="comment_static_icon"></div>
            <span>20</span>
          </div>
          <img src="https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg" />
        </div>
        <div className="post_img_grid">
          <img src="https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg" />
        </div>
        <div className="post_img_grid">
          <img src="https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg" />
        </div>
        <div className="post_img_grid">
          <img src="https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg" />
        </div>
        <div className="post_img_grid">
          <img src="https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg" />
        </div>
        <div className="post_img_grid">
          <img src="https://res.cloudinary.com/dyp7mhniv/image/upload/v1631968244/1631968244366.jpg" />
        </div> */}
      </div>
    </Fragment>
  );
};
