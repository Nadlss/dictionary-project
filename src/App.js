import React from "react";
import logo from './undraw_Bibliophile_hwqc.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword="beach"/>
      </main>
      <footer className="App-footer">
        <small>This project was coded by <a href="https://github.com/Nadlss">Susana Simões</a> is <a href="https://github.com/Nadlss/dictionary-project">open-sourced on GitHub</a> and hosted on <a href="https://app.netlify.com/teams/nadlss/overview">Netlify</a>.</small>
      </footer>
      </div>
    </div>
  );
}


