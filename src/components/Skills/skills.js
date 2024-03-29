import React from "react";
import { useTranslation } from "react-i18next";

import "./skills.css";

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="row" id="skills">
      <div className="center-title mb-4">
        <h3 className="col-12">{t("skills.title")}</h3>
        <h2 className="col-lg-8 col-md-9 mt-1">{t("skills.description")}</h2>
      </div>
      <div className="row my-5">
        <div className="education pe-3 col-lg-6 col-md-11 col-sm-12">
          <div className="mb-5">
            <div className="date mb-3 col-lg-5 col-md-3 col-sm-4 col-7">
              2022 - 2024
            </div>
            <h4>{t("skills.experience1-title")}</h4>
            <p>{t("skills.experience1-description")}</p>
          </div>
          <div className="mb-5">
            <div className="date mb-3 col-lg-5 col-md-3 col-sm-4 col-7">
              2021 - 2022
            </div>
            <h4>{t("skills.experience2-title")}</h4>
            <p>{t("skills.experience2-description")}</p>
          </div>
        </div>
        <div className="experience col-lg-6 col-md-11 col-sm-12">
          <div className="mb-5">
            <div className="date mb-3 col-lg-5 col-md-3 col-sm-4 col-7">
              2022 - 2023
            </div>
            <h4>{t("skills.education1-title")}</h4>
            <p>{t("skills.education1-description")}</p>
          </div>
          <div className="mb-5">
            <div className="date mb-3 col-lg-5 col-md-3 col-sm-4 col-7">
              2020 - 2021
            </div>
            <h4>{t("skills.education2-title")}</h4>
            <p>{t("skills.education2-description")}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="pe-3 mb-5">
            <div className="techs pt-3">
              <p className="tech-text ms-4">JavaScript</p>
              <hr className="tech-line col-10"></hr>
            </div>
          </div>
          <div className="pe-3 mb-5">
            <div className="techs pt-3">
              <p className="tech-text ms-4">React</p>
              <hr className="tech-line col-10"></hr>
            </div>
          </div>
          <div className="pe-3 mb-5">
            <div className="techs pt-3">
              <p className="tech-text ms-4">Angular</p>
              <hr className="tech-line col-10"></hr>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="pe-3 mb-5">
            <div className="techs pt-3">
              <p className="tech-text ms-4">Python</p>
              <hr className="tech-line col-10"></hr>
            </div>
          </div>
          <div className="pe-3 mb-5">
            <div className="techs pt-3">
              <p className="tech-text ms-4">Node.js</p>
              <hr className="tech-line col-10"></hr>
            </div>
          </div>
          <div className="pe-3 mb-5">
            <div className="techs pt-3">
              <p className="tech-text ms-4">MySql</p>
              <hr className="tech-line col-10"></hr>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
