import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import instaNameLogo from "../../media/instagramNameLogo.png";
import AddBirthday from "./AddBirthday";
import { checkExistingField, isAuthenticated } from "../../services/auth";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Signup = () => {
  const [emailOrPhoneNum, setEmailOrPhoneNum] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showBdCmpnt, setShowBdCmpnt] = useState(false);
  const [userNameAlreadyTakenErr, setUserNameAlreadyTakenErr] = useState(false);
  const [emailAlreadyTakenErr, setEmailAlreadyTakenErr] = useState(false);
  const [showValidationIconForEmail, setShowValidationIconForEmail] =
    useState(false);
  const [showValidationIconForUserName, setShowValidationIconForUserName] =
    useState(false);
  const [showValidationIconForPhoneNum, setShowValidationIconForPhoneNum] =
    useState(false);

  const [phoneNumberAlreadyTakenErr, setPhoneNumberAlreadyTakenErr] =
    useState(false);
  const [emailTakenErrMsg, setEmailTakenErrMsg] = useState(
    "Email already taken"
  );
  const [phoneNumberTakenErrMsg, setPhoneNumberTakenErrMsg] = useState(
    "Phone number already taken"
  );
  const [userNameTakenErrMsg, setUserNameTakenErrMsg] = useState(
    "Username already taken"
  );

  const inputRefEmailOrPhoneNumber = useRef(null);
  const inputRefFullName = useRef(null);
  const inputRefUsername = useRef(null);
  const inputRefPassword = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) navigate("/");
  });
  const handleFocus = (refType) => {
    refType.current.style.fontSize = "10px";
  };

  const handleFocusOut = (fieldType, refType, setErrType) => {
    if (fieldType.length === 0) refType.current.style.fontSize = "15px";
    refType.current.style.fontSize = "10px";
    checkIfFieldExists(fieldType, setErrType);
  };

  const checkIfFieldExists = (fieldName, setErrType) => {
    if (fieldName.length > 0) {
      checkExistingField(fieldName).then((res) => {
        if (res.data.exists) {
          setErrType(true);
          console.log("this res data belongs to " + fieldName, res.data);
        } else {
          setErrType(false);
        }
      });
      if (checkIfPhoneNumberOrEmail(fieldName) === "email") {
        if (validateEmail(fieldName)) {
        }
      }
    }
  };

  //validate email
  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // check if the given string is a phone number or email
  const checkIfPhoneNumberOrEmail = (fieldName) => {
    if (fieldName.includes("@")) return "email";
    return "phoneNumber";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBdCmpnt(true);
  };

  return (
    <>
      {!showBdCmpnt ? (
        <div className="main_cntr_signUp">
          <div className="signUp_form">
            <div className="instaName_logo">
              <img
                width={250}
                height={80}
                src={instaNameLogo}
                alt="Instagram"
              />
            </div>
            <div className="signUp_msg">
              <p>Sign up to see photos and videos from your friends.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="signUp_fields">
                <div>
                  <label
                    ref={inputRefEmailOrPhoneNumber}
                    className="lable_login"
                  >
                    Mobile Number or Email
                  </label>
                  <input
                    type="text"
                    value={emailOrPhoneNum}
                    onFocus={() => handleFocus(inputRefEmailOrPhoneNumber)}
                    onChange={(e) => setEmailOrPhoneNum(e.target.value)}
                    onBlur={() =>
                      handleFocusOut(
                        emailOrPhoneNum,
                        inputRefEmailOrPhoneNumber,
                        setEmailAlreadyTakenErr
                      )
                    }
                  />
                  {emailOrPhoneNum.length > 1 && (
                    <>
                      {" "}
                      {emailAlreadyTakenErr ? (
                        <CloseCircleOutlined className="invalid_icon" />
                      ) : (
                        <CheckCircleOutlined className="check_icon" />
                      )}
                    </>
                  )}
                  {/* {phoneNumberAlreadyTakenErr ? (
                    <CloseCircleOutlined className="invalid_icon" />
                  ) : (
                    <CheckCircleOutlined className="check_icon" />
                  )} */}
                </div>
                <div>
                  <label ref={inputRefFullName} className="lable_login">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onFocus={() => handleFocus(inputRefFullName)}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => handleFocusOut(fullName, inputRefFullName)}
                  />
                </div>
                <div>
                  <label ref={inputRefUsername} className="lable_login">
                    Username
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onFocus={() => handleFocus(inputRefUsername)}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() =>
                      handleFocusOut(
                        userName,
                        inputRefUsername,
                        setUserNameAlreadyTakenErr
                      )
                    }
                  />
                  {userNameAlreadyTakenErr ? (
                    <CloseCircleOutlined className="invalid_icon" />
                  ) : (
                    <CheckCircleOutlined className="check_icon" />
                  )}
                </div>
                <div>
                  <label ref={inputRefPassword} className="lable_login">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onFocus={() => handleFocus(inputRefPassword)}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleFocusOut(password, inputRefPassword)}
                  />
                </div>
                <div>
                  <button
                    disabled={
                      !emailOrPhoneNum || !fullName || !userName || !password
                        ? true
                        : false
                    }
                    type="submit"
                    className={
                      !emailOrPhoneNum || !fullName || !userName || !password
                        ? "login_btn_disabled"
                        : "login_btn"
                    }
                  >
                    Sign up
                  </button>
                </div>
                {emailAlreadyTakenErr && (
                  <p className="text-danger font_forgotPassword">
                    {emailTakenErrMsg}
                  </p>
                )}
                {phoneNumberAlreadyTakenErr && (
                  <p className="text-danger err_msg font_forgotPassword">
                    {phoneNumberTakenErrMsg}
                  </p>
                )}
                {userNameAlreadyTakenErr && (
                  <p className="text-danger err_msg font_forgotPassword">
                    {userNameTakenErrMsg}
                  </p>
                )}
                <p className="font_forgotPassword">
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy .
                </p>
              </div>
            </form>
          </div>
          <div className="signup">
            {" "}
            <p>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      ) : (
        <AddBirthday
          emailOrPhoneNum={emailOrPhoneNum}
          fullName={fullName}
          userName={userName}
          password={password}
          setShowBdCmpnt={setShowBdCmpnt}
        />
      )}
    </>
  );
};

export default Signup;
