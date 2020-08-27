import React from "react";
import "./Outro.css";

const Outro = () => {
  return (
    <>
      <div className="main-outro">
        <div id="webring-wrapper">
          <a
            href="https://loboadrian.github.io/"
            id="previousBtn"
            className="webring-anchor"
            title="Previous"
          >
            ‹
          </a>
          <a
            href="https://webring.hackclub.com/"
            className="webring-logo"
            title="Hack Club Webring"
            alt="Hack Club Webring"
          ></a>
          <a
            href="https://fogeinator.github.io/"
            id="nextBtn"
            className="webring-anchor"
            title="Next"
          >
            ›
          </a>
          <script src="https://webring.hackclub.com/public/embed.min.js"></script>
        </div>
        <h2 id="outro-text">
          <a className="removeClass" href="#home">
            Home
          </a>
        </h2>
        <h2 id="outro-text">Copyright 2020 Faisal Sayed All Rights Reserved</h2>
      </div>
    </>
  );
};

export default Outro;
