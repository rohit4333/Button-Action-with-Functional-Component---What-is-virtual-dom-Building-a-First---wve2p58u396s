import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let t = false;
  const [paragraph, setPara] = useState("");
  const clickHandler = ()=>{
    t = true;
    setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }

  return (
    <div id="main">
      
      <button id="click" onClick={()=>clickHandler()}>Click</button>
      {(!t) ? <p id="para">{paragraph}</p> : ""}
    </div>
  );
}


export default App;
