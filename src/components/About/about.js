import React from "react";
import "./about.css";
import profileImg from "../../assets/images/profilepic.jpg";
import Cv from "../../assets/docs/SaraMoreiraCV.pdf"

function About() {
  return (
    <section className="row" id="about">
      <div className="d-flex align-items-center col-6">
        <div>
          <h1>ABOUT ME</h1>
          <h2>Transforming visions into exceptional portfolios</h2>
          <div className="d-flex mt-5">
            <div className="col-2 me-4">
              <hr className="about-line"></hr>
            </div>
            <div className="col-10">
              <p className="mb-5">
                Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                aut odit auting fugit sed thisnquia consequuntur magni dolores
                eos designer heresm qui ratione
              </p>
              <a href={Cv} download="Cv Sara Moreira" className="btn-green">
                Download CV <i className="fa-solid fa-download ms-2"></i>
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
              <p className="text">Check my code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
