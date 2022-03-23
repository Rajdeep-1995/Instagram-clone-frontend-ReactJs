import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  authenticate,
  registerUser,
  signIn,
  validateOTVC,
} from "../../services/auth";
import { LoadingOutlined } from "@ant-design/icons";
import "./brithDay.css";
import "./login.css";

const EmailConfirm = ({
  emailOrPhoneNum,
  fullName,
  userName,
  password,
  setShowBdCmpnt,
  setEnableEmailConfirm,
  handleSubmitOtvc,
  birthday,
}) => {
  const [otvc, setotvc] = useState("");
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRefOtvc = useRef(null);
  const snakeBarRef = useRef(null);
  const navigate = useNavigate();

  const handleFocus = (refType) => {
    refType.current.style.fontSize = "10px";
  };

  const handleFocusOut = (fieldType, refType) => {
    if (fieldType.length === 0) {
      refType.current.style.fontSize = "15px";
    } else {
      refType.current.style.fontSize = "10px";
    }
  };

  const handleResendOtvc = () => {
    handleSubmitOtvc();
    snakeBarRef.current.classList.add("show");
    setTimeout(() => {
      snakeBarRef.current.classList.remove("show");
    }, 3000);
  };

  const handleValidateOtvc = (e) => {
    setLoading(true);
    e.preventDefault();

    /*
     *1.validate OTVC
     *2.if validated, register user
     *3.if registered, signIn user,
     */
    validateOTVC(emailOrPhoneNum, otvc)
      .then((validateResponse) => {
        if (validateResponse.data && validateResponse.data === true) {
          registerUser(
            emailOrPhoneNum,
            fullName,
            userName,
            password,
            birthday
          ).then((registerUserResponse) => {
            if (
              registerUserResponse.data &&
              registerUserResponse.data === true
            ) {
              signIn(emailOrPhoneNum, password).then((signInResponse) => {
                if (signInResponse.data) {
                  authenticate(signInResponse.data);
                  setSignInSuccess(true);
                  setLoading(false);
                  navigate("/");
                }
              });
            }
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        snakeBarRef.current.classList.add("show");
        setTimeout(() => {
          snakeBarRef.current.classList.remove("show");
        }, 3000);
      });
  };

  return (
    <div>
      <div className="main_cntr">
        <div className="login_form">
          <div className="m_logo">
            <div className="email_logo"></div>
          </div>
          <p className="emailPg_heading">Enter Confirmation Code</p>
          <p className="bd_descmr text_center">
            Enter the confirmation code we sent to{" "}
            <strong>{emailOrPhoneNum}</strong>.
            <span onClick={handleResendOtvc} className="email_resend">
              Resend Code.
            </span>
          </p>
          <div ref={snakeBarRef} className="snackbar">
            email is resent to {emailOrPhoneNum}
          </div>
          <form onSubmit={handleValidateOtvc}>
            <div className="input_otvc">
              <div>
                <label ref={inputRefOtvc} className="lable_login">
                  Confirmation Code
                </label>
                <input
                  type="text"
                  value={otvc}
                  onFocus={() => handleFocus(inputRefOtvc)}
                  onChange={(e) => setotvc(e.target.value)}
                  onBlur={() => handleFocusOut(otvc, inputRefOtvc)}
                />

                <div>
                  <button
                    disabled={!otvc ? true : false}
                    type="submit"
                    className={!otvc ? "login_btn_disabled" : "login_btn"}
                  >
                    {!loading ? "Next" : <LoadingOutlined />}
                  </button>
                </div>
                <p
                  onClick={() => setEnableEmailConfirm(false)}
                  className="bd_go_back_signup"
                >
                  Go Back
                </p>
              </div>
            </div>
          </form>
        </div>

        <div className="signup">
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirm;
