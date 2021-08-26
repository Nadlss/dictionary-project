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
        <small>Coded by <a href="https://github.com/Nadlss">Susana Simões</a></small>
        <br />
          {/* Background photo by <a href="https://unsplash.com/@noitadigital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Noita Digital</a> on <a href="https://unsplash.com/s/photos/chalkboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
      </footer>
      </div>
    </div>
  );
}


