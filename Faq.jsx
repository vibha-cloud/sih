import React from "react";
import Accordion from "./accordion";
import { faqs } from "./que";
import img from "../assets/faq.png";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="top">
        <h1 className="heading">Frequently Asked Questions</h1>
        <img src={img} alt="" className="faq-img" />
      </div>
      <div className="accordion">
        {faqs.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
