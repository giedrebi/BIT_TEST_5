import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Jokes from "./components/Jokes/Jokes";

function App() {
  return (
    <div>
      <Header/>
      <Jokes />
    </div>
  );
}

export default App;
