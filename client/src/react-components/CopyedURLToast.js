import React from "react";
import "./styles/CopyedURLToast.css";

const CopyedURLToast = (prop) => {
  return (
    <>
      <div className="CopyedURLToast_Page_Container">
        <h1>Copyed {prop.url}</h1>
      </div>
    </>
  );
};

export default CopyedURLToast;
