import React from "react";
import logo from "../src/PaymentShow/logo.png";
import "../src/App.css";
import data from "./Alldata";
import PaymentShow from "./PaymentShow/PaymentShow";

function App() {
  return (
    <div className="head-main-box">
      {/* Head Option start  */}
      <div className="head-option d-flex">
        <div className="head-left d-flex">
          <img src={logo} alt="sr-logo" />
          <div className="head-left-text">
            <h4 className="h-four">S.R Travels (Pvt) Ltd</h4>
            <h5>1, AK1J, Non AC</h5>
            <p>Dhaka - Bogura</p>
          </div>
        </div>
        <div className="head-middle">
          <p className="coach1">Coach 152852</p>
          <p>04:00 AM</p>
        </div>
        <div className="head-right">
          <b className="b1">B1</b>
          <h4 className="h-four">BDT 550</h4>
        </div>
      </div>
      {/* Head Option End  */}
      {/* Total Money Box Start  */}
      <div className="total-money-main">
        <div className="total-money-upper">
          <div className="total-money-box d-flex">
            <b>Total Ticket Price</b>
            <strong>
              <b>৳</b> 550
            </strong>
          </div>
          <div className="total-money-box d-flex">
            <b>Service Charge</b>
            <strong>
              <b>৳</b> 25
            </strong>
          </div>
          <div className="total-money-box d-flex">
            <b>Gateway Charge</b>
            <strong>
              <b>৳</b> 12
            </strong>
          </div>
        </div>
        <div className="division"></div>
        <div className="total-money-box total-money d-flex">
          <b>Total Price</b>
          <strong>
            <b>৳</b> 587
          </strong>
        </div>
      </div>
      {/* Total Money Box End  */}
      {/* Payment Method Start Here  */}
      <div>
        <div className="d-flex paymentmain-box">
          {data.map((d, index) => (
            <PaymentShow key={d.id} index={index} data={d} />
          ))}
        </div>
      </div>
      {/* Payment Method End Here */}
      <div className="paynow-btn">
        <button>Pay Now</button>
      </div>
    </div>
  );
}

export default App;
