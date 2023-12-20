import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Card from "./Card/card";
import bar89 from "../../assets/images/bar89.png";
import casaRural from "../../assets/images/casarural.png";
import bestPhoto from "../../assets/images/bestphoto.png";
import socialApp from "../../assets/images/socialApp.png";
import eCommerce from "../../assets/images/e-commerce2.png";
import spotify from "../../assets/images/spotify.png";
import atletico from "../../assets/images/atletico-sanabria.png";
import aigostar from "../../assets/images/aigostar.png";

import "./projects.css";

function Projects() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Projects data
  const projects = [
    {
      imageSrc: aigostar,
      name: "Aigostar",
      post: t("projects.aigostar"),
      link: "https://aigostarcooking.com/",
      github: "https://github.com/SaraMoreiraG/Aigostar",
      category: "React",
    },
    {
      imageSrc: atletico,
      name: "Atlético Sanabria",
      post: t("projects.atletico"),
      link: "http://atleticosanabria.com/",
      github: "https://github.com/SaraMoreiraG/restaurante-el89",
      category: "React",
    },
    {
      imageSrc: bar89,
      name: "Restaurante el 89",
      post: t("projects.bar89"),
      link: "https://saramoreirag.github.io/restaurante-el89/",
      github: "https://github.com/SaraMoreiraG/restaurante-el89",
      category: "Angular",
    },
    {
      imageSrc: casaRural,
      name: "Casa de Armas",
      post: t("projects.casaRural"),
      link: "http://casadearmas.s3-website-us-east-1.amazonaws.com/",
      github: "https://github.com/SaraMoreiraG/CasaRural",
      category: "Angular",
    },
    {
      imageSrc: eCommerce,
      name: "E-commerce",
      post: t("projects.ecommerce"),
      github: "https://github.com/SaraMoreiraG/e-commerce",
      category: "React",
    },
    {
      imageSrc: bestPhoto,
      name: "Best Photo Places",
      post: t("projects.photoblog"),
      link: "https://bestphotoplaces.wordpress.com/",
      category: "WordPress",
    },
    {
      imageSrc: spotify,
      name: "Spotify Api",
      post: t("projects.spotify"),
      github: "https://github.com/SaraMoreiraG/SpotifyCountdown",
      category: "React",
    },
    {
      imageSrc: socialApp,
      name: "Travel Tales",
      post: t("projects.travel"),
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
    <section className="row" id="projects">
      <h3>{t("projects.title")}</h3>
      <h2 className="col-lg-7 col-md-12 mt-3 mb-5">
        {t("projects.description")}
      </h2>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-2 col-md-3 col-sm-9 col-6 p-2">
          <div className={`btn-green2 ${
                selectedCategory === "All" ? "btn-selected" : ""
              }`}
              onClick={() => setSelectedCategory("All")}>
            <button
              className="btn-clean"
            >
              All
            </button>
          </div>
        </div>
		<div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
          <div className={`btn-green2 me-2 ${
            selectedCategory === "React" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("React")}>
            <button className="btn-clean"

        >
          React
        </button>
		</div>
		</div>
		<div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
          <div className={`btn-green2 me-2 ${
            selectedCategory === "Angular" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("Angular")}>
            <button className="btn-clean"
        >
          Angular
        </button>
		</div>
		</div>
		<div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
          <div   className={`btn-green2 ${
            selectedCategory === "WordPress" ? "btn-selected" : ""
          }`}
          onClick={() => setSelectedCategory("WordPress")}>
            <button
              className="btn-clean"
        >
          WordPress
        </button>
		</div>
		</div>
      </div>
      <div className="row m-0 p-0">
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
    </section>
  );
}

export default Projects;
