import React, { Fragment, useState } from "react";
import { updateUserLocal } from "../services/auth";
import { uploadProfilePhoto } from "../services/user";
import "./profileUpload.css";

const ProfileUpload = ({ setOpenModal, token, setLoadingUpload }) => {
  const handleProfileUpload = async (e) => {
    let uploadedFile = e.target.files[0];

    if (uploadedFile) {
      let formData = new FormData();
      formData.append("media", uploadedFile);
      setOpenModal(false);
      setLoadingUpload(true);
      const response = await uploadProfilePhoto(formData, token);
      if (response?.status === "ok") {
        updateUserLocal(response.public_url);
        setLoadingUpload(false);
      } else {
        console.log("failed to upload profile photo---> ", response);
      }
    }
  };
  return (
    <Fragment>
      <div className="pr_modal_main_body">
        <div className="pr_modal">
          <div>Change Profile Photo</div>
          <hr />
          <div>
            <label>
              Photo Upload
              <input hidden type="file" onChange={handleProfileUpload} />
            </label>
          </div>
          <hr />
          <div>Remove Current Photo</div>
          <hr />
          <div onClick={() => setOpenModal(false)}>Cancel</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileUpload;
