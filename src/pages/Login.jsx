import React, { useRef, useState } from "react";
import "./login.css";
import instaNameLogo from "../media/instagramNameLogo.png";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const handleFocus = (e) => {
    inputRef.current.style.fontSize = "10px";
  };
  return (
    <div className="main_cntr">
      <div className="login_form">
        <div className="instaName_logo">
          <img width={250} height={80} src={instaNameLogo} alt="instagram" />
        </div>
        <form>
          <div className="input_fields">
            <div>
              <label ref={inputRef} className="lable_login">
                Phone number, username, or email
              </label>
              <input
                type="text"
                value={userName}
                onFocus={handleFocus}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="lable_login">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="login_btn">
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
