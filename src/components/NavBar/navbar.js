import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import spanishFlag from "../../assets/images/spanish-flag.png";
import englishFlag from "../../assets/images/english-flag.png";

import "./navbar.css";

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, i18n } = useTranslation();
  const currentLanguaje = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // User has started scrolling, show the navbar
        setIsScrolling(true);
      } else {
        // User is at the top of the page, hide the navbar
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling, activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to set the active section if it's already in view on page load.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`nav ${
        activeSection === "" || !isScrolling ? "" : "nav-visible"
      }`}
    >
      <div className="social-media-small col-12">
        <div className="social-media-nav">
          <a
            href="https://www.instagram.com/saramordev/"
            target="_blank"
            rel="noreferrer"
            className="green-frame-icon me-3"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sara-moreira-g/"
            target="_blank"
            rel="noreferrer"
            className="green-frame-icon me-3"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/SaraMoreiraG"
            target="_blank"
            rel="noreferrer"
            className="green-frame-icon me-3"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <div className="languaje-buttons">
            <div className="languaje-container">
              <button
                onClick={() => changeLanguage("es")}
                className="btn-languaje"
              >
                <img
                  className={`languaje ${
                    currentLanguaje === "es" ? "selected" : ""
                  }`}
                  src={spanishFlag}
                  alt="bandera española"
                />
              </button>
            </div>
            <div className="languaje-container">
              <button
                onClick={() => changeLanguage("en")}
                className="btn-languaje"
              >
                <img
                  className={`languaje ${
                    currentLanguaje === "en" ? "selected" : ""
                  }`}
                  src={englishFlag}
                  alt="english flag"
                />
              </button>
            </div>
          </div>
        </div>

      </div>
      <input type="checkbox" id="nav-check" />
      <div className="main-nav col-12">
        <a href="#home" className="nav-header">
          <div className="nav-img"></div>
          <div className="nav-title">SaraMorDev</div>
        </a>
        <div className="nav-links">
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            {t("nav.projects")}
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            {t("nav.about")}
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            {t("nav.skills")}
          </a>
          <a
            href="#getInTouch"
            className={activeSection === "getInTouch" ? "active" : ""}
          >
            {t("nav.contact")}
          </a>
        </div>
        <div>
          <div className="d-flex">
            <div className="social-media-nav social-media-big">
              <a
                href="https://www.instagram.com/saramordev/"
                target="_blank"
                rel="noreferrer"
                className="green-frame-icon me-3"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sara-moreira-g/"
                target="_blank"
                rel="noreferrer"
                className="green-frame-icon me-3"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/SaraMoreiraG"
                target="_blank"
                rel="noreferrer"
                className="green-frame-icon me-3"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <div className="languaje-buttons">
                <div className="languaje-container">
                  <button
                    onClick={() => changeLanguage("es")}
                    className="btn-languaje"
                  >
                    <img
                      className={`languaje ${
                        currentLanguaje === "es" ? "selected" : ""
                      }`}
                      src={spanishFlag}
                      alt="bandera española"
                    />
                  </button>
                </div>
                <div className="languaje-container">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="btn-languaje"
                  >
                    <img
                      className={`languaje ${
                        currentLanguaje === "en" ? "selected" : ""
                      }`}
                      src={englishFlag}
                      alt="english flag"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="nav-btn">
              <div className="green-frame-icon">
                <label htmlFor="nav-check">
                  <i className="fa-solid fa-bars"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
