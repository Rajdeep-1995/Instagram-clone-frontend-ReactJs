import React from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
