import React from "react";
import { useTranslation } from 'react-i18next';

import profileImg from "../../assets/images/profilepic.jpg";
import Cv from "../../assets/docs/SaraMoreiraCV.pdf"

import "./about.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className="row" id="about">
      <div className="d-flex align-items-center col-6">
        <div>
          <h1>{t('about.title')}</h1>
          <h2>{t('about.title2')}</h2>
          <div className="d-flex mt-5">
            <div className="col-2 me-4">
              <hr className="about-line"></hr>
            </div>
            <div className="col-10">
              <p className="mb-5">{t('about.p')}</p>
              <a href={Cv} download="Cv Sara Moreira" className="btn-green">
              {t('about.download')} <i className="fa-solid fa-download ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img-button col-6">
        <div className="elem-container">
          <div className="col-8">
            <img src={profileImg} alt="Sara Moreira Img" />
          </div>
          <div className="github" onClick={()=> window.open("https://github.com/SaraMoreiraG", "_blank")}>
            <i class="fa-brands fa-github"></i>
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
