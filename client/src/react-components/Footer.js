import React from "react";
import "./styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="Footer_Container">
        <div className="Company_and_Follow_Us_Container">
          <div className="About_Company">
            <h2>About Us</h2>
            <h2>Our Services</h2>
            <h2>Privacy Policy</h2>
          </div>
          <div className="FollowUs_Container">
            <span className="iconify" data-icon="mdi:instagram"></span>
            <span className="iconify" data-icon="mdi:twitter"></span>
            <span className="iconify" data-icon="mdi:linkedin"></span>
          </div>
        </div>
        <h1 className="Copyright_Text">Copyright &copy; {year} Roman Ojha</h1>
      </div>
    </>
  );
};

export default Footer;
