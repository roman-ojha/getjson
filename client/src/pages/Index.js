import React from "react";
import appIcon from "../assets/icons/appicon.png";
import "../style/index.css";

const index = () => {
  return (
    <>
      <div className="Container">
        <nav className="NavBar_Container">
          <div className="NavBar_Title_Container">
            <h1 className="NavBar_Title_get_Letter">Get</h1>
            <h1 className="NavBar_Title_J_Letter">J</h1>
            <h1 className="NavBar_Title_son_Letter">son</h1>
          </div>
        </nav>
        <header className="Header_Container">
          <pre className="Header_Title">
            {`Free API for testing
purpose { }`}
          </pre>
        </header>
      </div>
    </>
  );
};

export default index;
