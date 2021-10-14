import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "../../../style/LandingPage.scss";
import Tree from "../../../assets/video/Tree.mp4";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response.data);
    });
  }, []);

  const onClick = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className={isActive ? "sec active" : "sec"}>
        <video autoPlay muted loop>
          <source src={Tree} type="video/mp4" />
        </video>
        <h2>
          Show
          <br />
          Me!
        </h2>
        <div
          className={isActive ? "dot active" : "dot"}
          onClick={toggleActive}
        ></div>
        <button onClick={onClick}>
          <span>Log Out</span>
        </button>
        <Link to="/login">
          <button>
            <span>Sign In</span>
          </button>
        </Link>
        <Link to="/register">
          <button>
            <span>Register</span>
          </button>
        </Link>
      </section>
    </>
  );
}

export default withRouter(LandingPage);
