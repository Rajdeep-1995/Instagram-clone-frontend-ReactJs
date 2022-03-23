import React from "react";
import "../pages/auth/brithDay.css";
import "./bdPopup.css";

const BdPopUp = ({ setModalPopUp }) => {
  return (
    <div className="bd_body">
      <div className="bd_modal sm">
        <div className="bd_modal_flex">
          <h4>Birthdays</h4>
          <div onClick={() => setModalPopUp(false)} className="bd_modal_close">
            X
          </div>
        </div>
        <hr style={{ padding: "0px", margin: "0px" }} />
        <div className="bd_cake"></div>
        <h1 className="bd_modal_title">Birthdays on Instagram</h1>
        <p className="bd_modal_desc">
          Providing your birthday improves the features and ads you see, and
          helps us keep the Instagram community safe. You can find your birthday
          in your Personal Information Account Settings.
        </p>
        <hr />
        <p className="bd_modal_lmore">Learn More</p>
      </div>
    </div>
  );
};

export default BdPopUp;
