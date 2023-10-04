import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Full Stack Developer", "Front End", "Back End"];
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlip(true);

      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFlip(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row" id="home">
      <div className="left col-6">
        <div className="header-text">
          <h1>Hello!</h1>
          <h1>
            <small>I am</small> Sara
          </h1>
          <h2 className={`title-transition ${flip ? "title-flip" : ""}`}>
            {titles[currentTitleIndex]}
          </h2>
        </div>
      </div>
      <div class="right col-6">
        <div class="icons">
          <div class="row">
            <i class="fa-solid fa-code"></i>
          </div>
          <div class="row">
            <div class="d-flex justify-content-evenly">
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3"></i>
            </div>
            <div class="d-flex justify-content-center">
              <i class="fa-brands fa-bootstrap"></i>
            </div>
            <div class="d-flex justify-content-around">
              <i class="fa-brands fa-square-js ms-5"></i>
              <i class="fa-brands fa-react me-5"></i>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
			<div className="d-flex justify-content-end">
            <i class="fa-solid fa-code"></i>
			</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
