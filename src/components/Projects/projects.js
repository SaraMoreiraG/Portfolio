import React, { useState } from "react";
import Card from "./Card/card";
import bar89 from "../../assets/images/bar89.png";
import casaRural from "../../assets/images/casarural.png";
import bestPhoto from "../../assets/images/bestphoto.png";
import socialApp from "../../assets/images/socialApp.png";
import eCommerce from "../../assets/images/e-commerce2.png";
import spotify from "../../assets/images/spotify.png";

import "./projects.css";

function Projects() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	// Projects data
	const projects = [
	  {
		imageSrc: bar89,
		name: "Restaurante el 89",
		post: "Web Developer",
		link: "#",
		github: "https://github.com/SaraMoreiraG/restaurante-el89",
		category: "Angular",
	  },
	  {
		imageSrc: casaRural,
		name: "Casa de Armas",
		post: "Web Developer",
		link: "#",
		github: "https://github.com/SaraMoreiraG/CasaRural",
		category: "Angular",
	  },
	  {
		imageSrc: eCommerce,
		name: "E-commerce",
		post: "E-commerce",
		link: "#",
		github: "https://github.com/SaraMoreiraG/e-commerce",
		category: "React",
	  },
	  {
		imageSrc: bestPhoto,
		name: "Best Photo Places",
		post: "E-commerce",
		link: "https://bestphotoplaces.wordpress.com/",
		category: "WordPress",
	  },
	  {
		imageSrc: spotify,
		name: "Spotify Api",
		post: "E-commerce",
		link: "#",
		github: "https://github.com/SaraMoreiraG/SpotifyCountdown",
		category: "React",
	  },
	  {
		imageSrc: socialApp,
		name: "Travel Tales",
		post: "E-commerce",
		link: "#",
		github: "https://github.com/SaraMoreiraG/Travel-Tales-React-Flask-Api",
		category: "React",
	  },
	];

	// Create a filtered list of projects based on the selected category
	const filteredProjects =
	  selectedCategory === "All"
		? projects
		: projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="row" id="projects">
      <h1>Projects</h1>
      <h2 className="col-8 mt-3 mb-5">
        Elevate your brand to new heights with our portfolio expertise
      </h2>
      <div className="row justify-content-center mb-5">
        <button
          className={`btn-green2 me-2 ${
            selectedCategory === "All" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`btn-green2 me-2 ${
            selectedCategory === "React" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("React")}
        >
          React
        </button>
        <button
          className={`btn-green2 me-2 ${
            selectedCategory === "Angular" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("Angular")}
        >
          Angular
        </button>
        <button
          className={`btn-green2 ${
            selectedCategory === "WordPress" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("WordPress")}
        >
          WordPress
        </button>
      </div>
	  <div className="row">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            name={project.name}
            post={project.post}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;