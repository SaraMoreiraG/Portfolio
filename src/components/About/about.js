import React from "react";
import { useTranslation } from 'react-i18next';

import profileImg from "../../assets/images/web-photo.jpg";
import Cv from "../../assets/docs/SaraMoreiraCV.pdf"

import "./about.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className="row g-5" id="about">
      <div className="d-flex align-items-center col-md-6 col-sm-12">
        <div>
          <h3>{t('about.title')}</h3>
          <h2>{t('about.title2')}</h2>
          <div className="d-flex mt-5">
            <div className="col-md-2 col-sm-0 ">
              <hr className="about-line me-2"></hr>
            </div>
            <div className="col-md-10 col-sm-12 mb-3">
              <p className="mb-5">{t('about.p')}</p>
              <a href={Cv} download="Cv Sara Moreira" className="btn-green">
              {t('about.download')} <i className="fa-solid fa-download ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img-button col-md-6 col-sm-12">
        <div className="elem-container">
          <div className="col-8">
            <img src={profileImg} alt="Sara Moreira Img" />
          </div>
          <div className="github" onClick={()=> window.open("https://github.com/SaraMoreiraG", "_blank")}>
            <i className="fa-brands fa-github"></i>
            <div>
              <p className="title">GitHub</p>
              <p className="text">{t('about.github')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
