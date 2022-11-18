import React, { Fragment, useEffect, useRef, useState } from "react";
import ProfileUpload from "../../modal/ProfleUpload";
import { isAuthenticated } from "../../services/auth";
import loadingIcon from "../../media/loading-buffering.gif";
import "./userProfile.css";
import SubNavMenu from "./SubNavMenu";

const ProfileInsight = ({ usernameParams }) => {
  const [defaultAvatar, setDefaultAvatar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);

  const profileBlurRef = useRef(null);

  const {
    user: { username, profilePhoto, fullName },
    token,
  } = isAuthenticated();

  useEffect(() => {
    if (profilePhoto.match("images/avatar.jpg")) {
      setDefaultAvatar(true);
    }
    if (loadingUpload) {
      profileBlurRef.current.classList.add("p_opacity");
    } else {
      profileBlurRef.current.classList.remove("p_opacity");
    }
  }, [profilePhoto, loadingUpload]);

  return (
    <Fragment>
      <div className="p_main_cntr">
        <div className="p_profile_info">
          <div
            onClick={() => setOpenModal(true)}
            className="p_profile_photo_sc"
            ref={profileBlurRef}
          >
            <img src={profilePhoto} alt="Add profile" />
            {loadingUpload && (
              <span className="p_upload_loading">
                <img
                  src={loadingIcon}
                  alt="loading..."
                  width="65px"
                  height="65px"
                />
              </span>
            )}
          </div>
          {openModal && (
            <ProfileUpload
              setOpenModal={setOpenModal}
              token={token}
              setLoadingUpload={setLoadingUpload}
            />
          )}
          <div className="p_profile_insight">
            <div>
              <p>{username}</p>
              <div>Edit Profile</div>
              <div>
                <svg
                  aria-label="Options"
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div>
                <strong>0</strong> posts
              </div>
              <div>
                <strong>0</strong> following
              </div>
              <div>
                <strong>0</strong> followers
              </div>
            </div>
            <div>{fullName}</div>
          </div>
        </div>
        <SubNavMenu userName={username} />
      </div>
    </Fragment>
  );
};

export default ProfileInsight;
