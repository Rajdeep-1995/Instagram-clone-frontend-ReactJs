import React, { Fragment } from "react";
import { useState } from "react";
import { PostList } from "../listOfPosts/PostList";
import "./subNavMenu.css";

const SubNavMenu = ({ userName }) => {
  const [postRefActive, setPostRefActive] = useState(true);
  const [savedRefActive, setSavedRefActive] = useState(false);
  const [taggedRefActive, setTaggedRefActive] = useState(false);

  const handleSubNavClick = (val) => {
    switch (val) {
      case "post":
        setPostRefActive(true);
        setSavedRefActive(false);
        setTaggedRefActive(false);
        break;
      case "savedPost":
        setPostRefActive(false);
        setSavedRefActive(true);
        setTaggedRefActive(false);
        break;
      case "taggedPost":
        setPostRefActive(false);
        setSavedRefActive(false);
        setTaggedRefActive(true);
        break;
      default:
        setPostRefActive(true);
        break;
    }
  };

  return (
    <Fragment>
      <div>
        <span>
          <hr className="sn_hr" />
        </span>
        <div className="sn_d_flex">
          <div className="sn_icons" onClick={() => handleSubNavClick("post")}>
            <spna className={postRefActive ? "sn_active_link" : ""}></spna>
            <div>
              <svg
                aria-label=""
                class="_ab6-"
                color="#262626"
                fill="#262626"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
            </div>
            <div className={postRefActive ? "sn_active_bold" : ""}>POSTS</div>
          </div>
          <div
            className="sn_icons"
            onClick={() => handleSubNavClick("savedPost")}
          >
            <spna className={savedRefActive ? "sn_active_link" : ""}></spna>
            <div>
              <svg
                aria-label=""
                class="_ab6-"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
            <div className={savedRefActive ? "sn_active_bold" : ""}>SAVED</div>
          </div>
          <div
            className="sn_icons"
            onClick={() => handleSubNavClick("taggedPost")}
          >
            <spna className={taggedRefActive ? "sn_active_link" : ""}></spna>
            <div>
              <svg
                aria-label=""
                class="_ab6-"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <path
                  d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <circle
                  cx="12.072"
                  cy="11.075"
                  fill="none"
                  r="3.556"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </svg>
            </div>
            <div className={taggedRefActive ? "sn_active_bold" : ""}>
              TAGGED
            </div>
          </div>
        </div>

        <PostList
          userName={userName}
          isPostPage={postRefActive}
          isSavedPostPage={savedRefActive}
          isTaggedPostPage={taggedRefActive}
        />
      </div>
    </Fragment>
  );
};

export default SubNavMenu;
