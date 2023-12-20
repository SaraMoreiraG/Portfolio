import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cv from "../../assets/docs/SaraMoreiraCV.pdf";
import Resume from "../../assets/docs/SaraMoreiraResume.pdf";

import "./home.css";

function Home() {
  const { t, i18n } = useTranslation();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [t("home.fullstack"), t("home.front"), t("home.back")];
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
    <section className="row py-5" id="home">
      <div className="left col-lg-6 col-md-12">
        <div className="header-text">
          <div className="m-0">
            <h1>{t("home.greeting")}</h1>
            <h1>{t("home.presentation")}</h1>
          </div>
            <h1 className={`title-transition ${flip ? "title-flip" : ""}`}>
              {titles[currentTitleIndex]}
            </h1>
            <p className="my-4">{t("home.description")}</p>
            <div className="home-button">
              <div className="btn-green">
              <a
                href={i18n.language === "es" ? Cv : Resume}
                download={
                  i18n.language === "es"
                    ? "Cv Sara Moreira"
                    : "Sara Moreira Resume"
                }
                className=""
              >
                {t("about.download")}{" "}
                <i className="fa-solid fa-download ms-2"></i>
              </a>
              </div>
              <a href="#projects" className="eye-container">
                <div className="eye me-2">
                  <i className="fa-solid fa-eye"></i>
                </div>
                Ver Proyectos
              </a>
            </div>
        </div>
      </div>
      <div className="right col-lg-6 col-sm-12">
        <div className="icons col-12">
          <div className="row mb-4">
            <i className="fa-solid fa-code"></i>
          </div>
          {/* Render the icons based on currentTitleIndex */}
          <div className="row languajes">
            {iconClassMapping
              .find((mapping) => mapping.index === currentTitleIndex)
              .classes.map((iconClass, index) => (
                <div
                  className={`col-4 text-center ${
                    flip ? "fade-out" : "fade-in"
                  }`}
                  key={index}
                >
                  <i className={iconClass} />
                </div>
              ))}
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="d-flex justify-content-end">
              <i className="fa-solid fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
