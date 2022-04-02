import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddBirthday from "./pages/auth/AddBirthday";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/accounts/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/:usernameParams" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
