import React from "react";
import { FaGithub, FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import reactDom from "react-dom";
import "./index.css";

function SectionList() {
  return (
    <section>
      <Content />
    </section>
  );
}

const Content = () => {
  return (
    <div className="box">
      <img src="./Images/aashish.jpg" alt="" class="box-img"></img>
      <h5>It's me Aashish </h5>
      <p>I love writing code. Welcome to my Page.</p>
      <IconContext.Provider value={{ color: "Black", size: "1.5rem" }}>
        <ul className="icons">
          <li>
            <a href="#">
              <FaGithub /> Github
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <FaTelegram /> Telegram
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillInstagram /> Insta
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
};

reactDom.render(<SectionList />, document.getElementById("root"));
