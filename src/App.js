import "./App.css";
import { useState } from "react";
import Bell_Icon from "./Bell_Icon.jpg";
import Bell_icon2 from "./Bell_icon2.jpg";

function App() {
  const [name, setName] = useState("");

  const [msg, setMsg] = useState("");

  const [note, setNote] = useState("Welcome to my Channel");

  const [icon, setIcon] = useState(Bell_Icon);

  function changeIcon(){
    setIcon(Bell_icon2);
  }

  function greetings() {
    setMsg(`Hello ${name}`);
    setNote(`Welcome ${name}, Pls Subscribe to my Channel`)
    setName("");
  }

  function subscribe(){
    setNote(`Pls Hit the bell icon to never miss any update`)
    console.warn('subscribe')
  }

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
      <button onClick={greetings}>Click Me!!</button>
      <h1>{msg}</h1>
      <h2>{note}</h2>
      <button onClick={subscribe}>Subscribe</button>
      <br/><br/>
      <img
        style={{ width: "80px", height: "80px" }}
        src={icon}
        onClick={changeIcon}
        alt=""
      />
    </div>
  );
}

export default App;
