import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import NavBarMain from "../components/NavBarMain";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div>
        <NavBarMain />
      </div>
    </>
  );
};

export default Home;
