import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarMain from "../components/NavBarMain";
import ProfileInsight from "../components/userProfile/ProfileInsight";
import { isAuthenticated } from "../services/auth";

const UserProfile = () => {
  const { usernameParams } = useParams();

  return (
    <Fragment>
      <NavBarMain />
      <ProfileInsight usernameParams={usernameParams} />
    </Fragment>
  );
};

export default UserProfile;
