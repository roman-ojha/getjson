import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import SyntaxHighlighterStyle from "./SyntaxHighlighterStyle";
import "../styles/index.css";

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
        <div className="Header_Container">
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
          <div className="Header_Container_Right_part">
            <SyntaxHighlighter
              className={"Header_CodeViewer_Container"}
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
              {`const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(await res.json()));`}
            </SyntaxHighlighter>
            <div>
              <button className="Get_Button">Get</button>
              <SyntaxHighlighter
                className={"Header_OutputViewer_Container"}
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
                {`{


}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
