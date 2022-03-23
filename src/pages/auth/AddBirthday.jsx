import React, { useState } from "react";
import { Link } from "react-router-dom";
import BdPopUp from "../../modal/BdPopUp";
import { sendOTVC } from "../../services/auth";
import "./brithDay.css";
import EmailConfirm from "./EmailConfirm";
import "./login.css";
import { LoadingOutlined } from "@ant-design/icons";

const AddBirthday = ({
  emailOrPhoneNum,
  fullName,
  userName,
  password,
  setShowBdCmpnt,
}) => {
  const [loading, setLoading] = useState(false);
  const [isMonthSelcetd, setIsMonthSelected] = useState(false);
  const [isYearSelected, setIsYearSelected] = useState(false);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);
  const [enableEmailConfimation, setEnableEmailConfirm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [fullBirthDate, setFullBirthDay] = useState("");

  if (modalPopUp) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const minYear = 1923;

  const numberOfDays = (month, year) => {
    return new Date(parseInt(year), parseInt(month), 0).getDate();
  };

  const handleMonth = (mon) => {
    setIsMonthSelected(true);
    setSelectedMonth(mon.target.value);
  };

  const handleYear = (yr) => {
    setSelectedYear(yr.target.value);
    setIsYearSelected(true);
  };

  const handleDate = (dt) => {
    const fullDate = new Date(
      parseInt(selectedYear),
      parseInt(selectedMonth),
      parseInt(dt.target.value)
    ).toISOString();
    setFullBirthDay(fullDate);
  };

  const handleSubmitOtvc = (resend = false) => {
    setLoading(true);
    sendOTVC(emailOrPhoneNum).then((res) => {
      if (res.data === true) {
        setEmailSentSuccess(true);
        res.data === true
          ? setEnableEmailConfirm(true)
          : setEnableEmailConfirm(false);
        setLoading(false);
      } else {
        console.log("failed to send OTVC---->" + res.data);
      }
    });
  };
  return (
    <>
      {!enableEmailConfimation ? (
        <div>
          <div className="main_cntr_bd">
            <div className="bd_form">
              <div className="bd_cake"></div>
              <p className="bd_add">Add Your Birthday</p>
              <p className="bd_descmr">
                This won't be part of your public profile.
                <p
                  onClick={() => setModalPopUp(true)}
                  className="bd_popup_click"
                >
                  Why do I need to provide my birthday?
                </p>
              </p>

              {modalPopUp && (
                <BdPopUp
                  setModalPopUp={setModalPopUp}
                  modalPopUp={modalPopUp}
                />
              )}
              <div className="bd_selector">
                <select className="bd_dropdown" onChange={handleMonth}>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
                <select className="bd_dropdown" onChange={handleYear}>
                  {new Array(2023 - minYear).fill(0).map((_, index) => (
                    <option key={index} value={index + minYear}>
                      {index + minYear}
                    </option>
                  ))}
                </select>
                <select className="bd_dropdown" onChange={handleDate}>
                  {(!isMonthSelcetd || !isYearSelected) && (
                    <option>{new Date().getDate()}</option>
                  )}
                  {isMonthSelcetd &&
                    isYearSelected &&
                    new Array(numberOfDays(selectedMonth, selectedYear))
                      .fill(0)
                      .map((_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                </select>
              </div>
              <div className="bd_info">
                You need to enter the date you were born
              </div>
              <div className="bd_info bd_w70">
                Use your own birthday, even if this account is for a business, a
                pet, or something else
              </div>
              <button
                onClick={handleSubmitOtvc}
                disabled={fullBirthDate.length === 0 ? true : false}
                className={
                  fullBirthDate.length === 0
                    ? "login_btn_disabled"
                    : "login_btn"
                }
              >
                {!loading ? "Next" : <LoadingOutlined />}
              </button>
              <p
                onClick={() => setShowBdCmpnt(false)}
                className="bd_go_back_signup"
              >
                Go Back
              </p>
            </div>
            <div className="signup">
              {" "}
              <p>
                Have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <EmailConfirm
          emailOrPhoneNum={emailOrPhoneNum}
          fullName={fullName}
          userName={userName}
          password={password}
          setEnableEmailConfirm={setEnableEmailConfirm}
          handleSubmitOtvc={handleSubmitOtvc}
          birthday={fullBirthDate}
        />
      )}
    </>
  );
};

export default AddBirthday;
