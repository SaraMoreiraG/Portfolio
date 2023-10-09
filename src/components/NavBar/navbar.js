import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

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
	  console.log(activeSection)
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to set the active section if it's already in view on page load.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
		{/* <a href="#home"> */}
        <div className="nav-img"></div>
        <div className="nav-title">SARA</div>
		{/* </a> */}
      </div>
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
          About
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
