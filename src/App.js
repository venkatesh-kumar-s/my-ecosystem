import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SecurityCheck from "./components/SecurityCheck";

function App() {
  const [pass, setPass] = useState();

  if (pass !== process.env.REACT_APP_SECURITY) {
    return <SecurityCheck update={setPass} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
