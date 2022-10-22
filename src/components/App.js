import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [paragraph, setPara] = useState("");
  const clickHandler = ()=>{
    setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }

  return (
    <div id="main">
      <p id="para">{paragraph}</p>
      <button id="click" onClick={()=>clickHandler()}>Click</button>
    </div>
  );
}


export default App;
