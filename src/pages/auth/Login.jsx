import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import instaNameLogo from "../../media/instagramNameLogo.png";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, isAuthenticated, signIn } from "../../services/auth";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [loginFailed, setLoginFailed] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRefUsername = useRef(null);
  const inputRefPassword = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) navigate("/");
  }, []);

  const handleFocus = (refType) => {
    refType.current.style.fontSize = "10px";
  };

  const handleFocusOut = (fieldType, refType) => {
    if (fieldType.length === 0) refType.current.style.fontSize = "15px";
    refType.current.style.fontSize = "10px";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (loginFailed) setLoginFailed(false);
    if (invalidCredentials) setInvalidCredentials(false);
    try {
      const loginSuccess = await signIn(userName, password);
      if (loginSuccess.status === 200) {
        setLoading(false);
        authenticate(loginSuccess.data);
        navigate("/");
      }
    } catch (err) {
      setInvalidCredentials(true);
      setLoading(false);
      setLoginFailed(true);
    }
  };

  const handleShowPassword = () => {
    showPassword === "text"
      ? setShowPassword("password")
      : setShowPassword("text");
  };

  return (
    <div className="main_cntr">
      <div className="login_form">
        <div className="instaName_logo">
          <img width={250} height={80} src={instaNameLogo} alt="instagram" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="input_fields">
            <div>
              <label ref={inputRefUsername} className="lable_login">
                Phone number, username, or email
              </label>
              <input
                type="text"
                value={userName}
                onFocus={() => handleFocus(inputRefUsername)}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() => handleFocusOut(userName, inputRefUsername)}
              />
            </div>
            <div>
              <label ref={inputRefPassword} className="lable_login">
                Password
              </label>
              <input
                type={showPassword}
                value={password}
                onFocus={() => handleFocus(inputRefPassword)}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleFocusOut(password, inputRefPassword)}
              />
              {showPassword === "text" ? (
                <EyeOutlined
                  className="eye_icon"
                  onClick={handleShowPassword}
                />
              ) : (
                <EyeInvisibleOutlined
                  className="eye_icon"
                  onClick={handleShowPassword}
                />
              )}
            </div>
            <div>
              <button
                disabled={!userName || !password ? true : false}
                type="submit"
                className={
                  !userName || !password ? "login_btn_disabled" : "login_btn"
                }
              >
                {!loading ? "Log In" : <LoadingOutlined />}
              </button>
            </div>
            <p className="font_forgotPassword">Forgot password?</p>
            {/* {loginFailed && (
              <p className="text-danger err_msg font_loginFailed">
                Login failed, please try again.
              </p>
            )} */}
            {invalidCredentials && (
              <p className="text-danger err_msg font_loginFailed">
                Invalid credentials, please try again.
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="signup">
        {" "}
        <p>
          Don't have an account? <Link to="/accounts/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
