import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Full Stack Developer", "Front End Techs", "Back End Techs"];
  const [flip, setFlip] = useState(false);
  const iconClassMapping = [
    {
      index: 0,
      classes: [
        "fa-brands fa-html5",
        "fa-brands fa-css3",
        "fa-brands fa-bootstrap",
        "fa-brands fa-square-js",
        "fa-brands fa-react",
        "fa-brands fa-angular",
        "fa-brands fa-python",
        "fa-brands fa-node",
        "fa-solid fa-database",
      ],
    },
    {
      index: 1,
      classes: [
        "fa-brands fa-html5",
        "fa-brands fa-css3",
        "fa-brands fa-bootstrap",
        "fa-brands fa-square-js",
        "fa-brands fa-react",
        "fa-brands fa-angular",
      ],
    },
    {
      index: 2,
      classes: [
        "fa-brands fa-python",
        "fa-brands fa-node",
        "fa-solid fa-database",
      ],
    },
  ];

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
        <div class="icons col-12">
          <div class="row mb-5 pb-5">
            <i class="fa-solid fa-code"></i>
          </div>
          {/* Render the icons based on currentTitleIndex */}
          <div class="row languajes">
          {iconClassMapping
    .find((mapping) => mapping.index === currentTitleIndex)
    .classes.map((iconClass, index) => (
      <div className={`col-4 text-center ${flip ? 'fade-out' : 'fade-in'}`} key={index}>
        <i className={iconClass} />
      </div>
    ))}
          </div>
          <div class="row d-flex justify-content-center mt-5 pt-5">
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
