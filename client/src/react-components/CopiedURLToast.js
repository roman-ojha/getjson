import React from "react";
import "./styles/CopiedURLToast.css";

const CopiedURLToast = (prop) => {
  return (
    <>
      <div className="CopiedURLToast_Page_Container">
        <h1>Copied {prop.url}</h1>
      </div>
    </>
  );
};

export default CopiedURLToast;
