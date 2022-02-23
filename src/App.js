import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await fetch("https://my-json-server.typicode.com/mastercode15/jsondb/db")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent("setToken", {
        detail: { clientId: data?.detail?.clientId, clientidType: "0001" },
      })
    );
    console.log("se disparó el evento con la ci:", data?.detail?.clientId);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CI cliente: {data?.detail?.clientId}</p>
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
