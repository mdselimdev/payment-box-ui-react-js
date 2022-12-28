import React from "react";
import "./PaymentShow.css";

const PaymentShow = ({ data, index }) => {
  const isToggleStyleAdd = (id, index) => {
    const paymentBoxAll = document.querySelectorAll("div.payment-box");
    const paymentCheckAll = document.querySelectorAll("div i");
    for (let i = 0; i < paymentBoxAll.length; i++) {
      if (index === i) {
        paymentBoxAll[i].onclick = () => {
          paymentBoxAll[i].classList.add("payment-boxbg");
          paymentCheckAll[i].classList.add("backch");
        };
      } else {
        paymentBoxAll[i].classList.remove("payment-boxbg");
        paymentCheckAll[i].classList.remove("backch");
      }
    }
  };

  return (
    <div
      className="payment-box"
      onClick={() => isToggleStyleAdd(data.id, index)}
    >
      <img className="payment-image" src={data.image} alt="img" />
      <i className="fa-solid fa-check check-button"></i>
    </div>
  );
};

export default PaymentShow;
