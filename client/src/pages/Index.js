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
        <div className="Header_Container_Left_part">
          <header className="Header_Title">
            <pre className="Header_Title">
              {`Free API for testing
purpose 
get{JSON}`}
            </pre>
          </header>
          <button className="Start_Button">Start</button>
        </div>
      </div>
    </>
  );
};

export default index;
