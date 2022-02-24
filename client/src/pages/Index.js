import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import SyntaxHighlighterStyle from "./SyntaxHighlighterStyle";
import "../styles/index.css";
import "../styles/indexMedia.css";
import CopiedURLToast from "../react-components/CopiedURLToast";
import { instance as axios } from "../services/axios";
import Footer from "../react-components/Footer";

const Index = () => {
  const [urlCopied, setUrlCopied] = useState(false);
  const url = `${process.env.REACT_APP_API_BASE_URL}/user`;
  const [headerContainerJsonData, setHeaderContainerJsonData] = useState(`{

}`);
  const [getMethodJsonData, setGetMethodJsonData] = useState(`{

  
}`);
  const [postMethodJsonData, setPostMethodJsonData] = useState(`{

  
}`);
  const [getMethodID, setgetMethodID] = useState("");
  const [postMethodFormData, setPostMethodFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    picture: "",
  });
  const copyURL = () => {
    setUrlCopied(false);
    setUrlCopied(true);
    navigator.clipboard.writeText(url);
    const displayToast = setTimeout(() => {
      setUrlCopied(false);
      clearTimeout(displayToast);
    }, 1000);
  };
  const getJsonOfHeader = async () => {
    try {
      const res = await axios.get("/user/1");
      const userDetail = await res.data;
      setHeaderContainerJsonData(JSON.stringify(userDetail, null, 4));
    } catch (e) {}
  };
  const getJsonForGetMethod = async () => {
    try {
      const res = await axios.get(`/user${getMethodID}`);
      const usersDetail = await res.data;
      setGetMethodJsonData(JSON.stringify(usersDetail, null, 4));
    } catch (e) {
      console.log(e);
    }
  };
  const getPostMethodFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostMethodFormData({
      ...postMethodFormData,
      [name]: value,
    });
  };
  const getJsonForPostMethod = async () => {
    const data = postMethodFormData;
    try {
      const res = await axios({
        method: "POST",
        url: "/user",
        data: data,
      });
      const usersDetail = await res.data;
      setPostMethodJsonData(JSON.stringify(usersDetail, null, 4));
    } catch (e) {}
  };
  return (
    <>
      {urlCopied ? <CopiedURLToast url={url} /> : ""}

      <div className="UpperBar_Container">
        <nav className="NavBar_Container">
          <div className="NavBar_Title_Container">
            <h1 className="NavBar_Title_get_Letter">Get</h1>
            <h1 className="NavBar_Title_J_Letter">J</h1>
            <h1 className="NavBar_Title_son_Letter">son</h1>
          </div>
        </nav>
        <div className="Header_Container">
          <div className="Header_Container_Left_part">
            <header className="Header_Title">
              <pre className="Header_Title">
                {`Free API for testing
purpose 
get{JSON}`}
              </pre>
            </header>
            <a href="#body" className="Start_Button">
              Start
            </a>
          </div>
          <div className="Header_Container_Right_part">
            <div className="Header_CodeViewer_Container">
              <SyntaxHighlighter
                className={"Header_CodeViewer"}
                language="javascript"
                style={SyntaxHighlighterStyle}
                customStyle={{
                  overflowX: "hidden",
                  borderRadius: "15px",
                }}
                useInlineStyles={{ fontSize: "1px" }}
                showLineNumbers
                lineProps={{ style: { wordWrap: "break-word" } }}
                lineProps={{
                  style: {
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                  },
                }}
                wrapLines={true}
              >
                {`const res = await fetch('${url}/1');
console.log(await res.json()));`}
              </SyntaxHighlighter>
            </div>
            <div
              className="Header_OutputViewer_and_Get_Button_Container"
              id="body"
            >
              <button className="Get_Button" onClick={getJsonOfHeader}>
                Get
              </button>
              <SyntaxHighlighter
                className={"Header_OutputViewer"}
                language="javascript"
                style={SyntaxHighlighterStyle}
                customStyle={{ overflowX: "hidden", borderRadius: "15px" }}
                useInlineStyles={{ fontSize: "1px" }}
                showLineNumbers
                lineProps={{ style: { wordWrap: "break-word" } }}
                lineProps={{
                  style: {
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                  },
                }}
                wrapLines={true}
              >
                {headerContainerJsonData}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <div className="Get_PostMethod_Container">
        <div className="GetMethod_Container">
          {/* <h1 className="GetMethod_Title">Get</h1> */}
          <div className="Id_and_Get_Button_Container">
            <input
              type="text"
              placeholder="ID"
              onChange={(e) => {
                setgetMethodID(`/${e.target.value}`);
              }}
            />
            <div className="Get_Method_Button_Container">
              <button className="Get_Method_Copy_Button" onClick={copyURL}>
                <span
                  className="iconify"
                  data-icon="mdi:content-copy"
                  data-width="24"
                  data-height="24"
                ></span>
              </button>
              <button
                className="Get_Method_Get_Button"
                onClick={getJsonForGetMethod}
              >
                Get
              </button>
            </div>
          </div>
          <SyntaxHighlighter
            className={"Method_CodeViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "15px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {`const res = await fetch('${url}${getMethodID}');
console.log(await res.json()));`}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            className={"Method_OutputViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "15px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {getMethodJsonData}
          </SyntaxHighlighter>
        </div>
        <div className="PostMethod_Container">
          {/* <h1 className="GetMethod_Title">Get</h1> */}
          <div className="InputField_Post_Button_Container">
            <div className="InputField_Container">
              <input
                type="text"
                placeholder="UserName"
                name="username"
                value={postMethodFormData.username}
                onChange={getPostMethodFormData}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={postMethodFormData.email}
                onChange={getPostMethodFormData}
                required
              />
              <input
                type="number"
                placeholder="PhoneNumber"
                name="phoneNumber"
                value={postMethodFormData.phoneNumber}
                onChange={getPostMethodFormData}
                required
              />
              <input
                type="text"
                placeholder="PictureURL"
                name="picture"
                value={postMethodFormData.picture}
                onChange={getPostMethodFormData}
                required
              />
            </div>
            <div className="Post_Method_Button_Container">
              <button
                className="Get_Method_Get_Button"
                onClick={getJsonForPostMethod}
              >
                Post
              </button>
              <button className="Get_Method_Copy_Button" onClick={copyURL}>
                <span
                  className="iconify"
                  data-icon="mdi:content-copy"
                  data-width="24"
                ></span>
              </button>
            </div>
          </div>
          <SyntaxHighlighter
            className={"Method_CodeViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "20px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {`const res = await fetch('${url}');
console.log(await res.json()));`}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            className={"Method_OutputViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "20px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {postMethodJsonData}
          </SyntaxHighlighter>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
