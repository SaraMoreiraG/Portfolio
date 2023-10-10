import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
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
    console.log("isScrolling:", isScrolling);
    console.log("activeSection:", activeSection);
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
    }

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
    <div className={`nav ${activeSection === "" || !isScrolling ? "" : "nav-visible"}`}>
      <input type="checkbox" id="nav-check" />
      <a href="#home" className="nav-header">
  <div className="nav-img"></div>
  <div className="nav-title">SARA</div>
</a>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
        >
          {t('nav.about')}
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
        >
          {t('nav.skills')}
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          {t('nav.projects')}
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          {t('nav.contact')}
        </a>
      </div>
      <div className="languaje-buttons">
      <button onClick={() => changeLanguage('es')} className="btn-languaje"><img className={`languaje ${currentLanguaje === "es" ? "selected" : ""}`} src={spanishFlag} /></button>
      <button onClick={() => changeLanguage('en')} className="btn-languaje"><img className={`languaje ${currentLanguaje === "en" ? "selected" : ""}`} src={englishFlag} /></button>
    </div>
    </div>
  );
}

export default Navbar;
