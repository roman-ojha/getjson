import React from "react";
import "./styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const instaGram = "https://www.instagram.com/roman__ojha/";
  const github = "https://github.com/Roman-Ojha";
  const linkedin = "https://www.linkedin.com/in/roman-ojha-3b8bb2209/";
  const twitter = "https://twitter.com/RomanOjha1";
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
            <div
              onClick={() => {
                window.open(github);
              }}
            >
              <span
                className="iconify FollowUs_Icons"
                data-icon="mdi:github"
              ></span>
            </div>
            <div
              onClick={() => {
                window.open(instaGram);
              }}
            >
              <span
                className="iconify FollowUs_Icons"
                data-icon="mdi:instagram"
              ></span>
            </div>
            <div
              onClick={() => {
                window.open(twitter);
              }}
            >
              <span
                className="iconify FollowUs_Icons"
                data-icon="mdi:twitter"
              ></span>
            </div>
            <div
              onClick={() => {
                window.open(linkedin);
              }}
            >
              <span
                className="iconify FollowUs_Icons"
                data-icon="mdi:linkedin"
              ></span>
            </div>
          </div>
        </div>
        <h1 className="Copyright_Text">Copyright &copy; {year} Roman Ojha</h1>
      </div>
    </>
  );
};

export default Footer;
