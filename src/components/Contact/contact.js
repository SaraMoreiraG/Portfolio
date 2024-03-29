import { useTranslation } from "react-i18next";

import "./contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="row gy-5" id="contact">
        <div className="d-flex align-items-top col-lg-4 col-12">
            <div className="green-circle col-3">
            <i className="fa-solid fa-location-dot"></i>
            </div>
          <div>
            <h3>{t("contact.address")}</h3>
            <p>C/ Jose Antonio Armona</p>
            <p>28012, Madrid{t("contact.country")}</p>
          </div>
        </div>

      <div className="d-flex align-items-top col-lg-4 col-12">
        <div className="green-circle col-3">
          <i className="fa-solid fa-phone-volume"></i>
        </div>
        <div>
          <h3>{t("contact.talk")}</h3>
          <p>+34 699 37 54 12</p>
          <p>saramordev@gmail.com</p>
        </div>
      </div>
      <div className="d-flex align-items-top col-lg-4 col-12">
        <div className="green-circle col-3">
          <i className="fa-solid fa-hashtag"></i>
        </div>
        <div className="social-media">
          <h3>{t("contact.socialmedia")}</h3>
          <p>
            <a href="https://www.linkedin.com/in/sara-moreira-g">
              <i className="fa-brands fa-linkedin"></i>Sara Moreira García
            </a>
          </p>
          <p>
            <a href="https://github.com/SaraMoreiraG">
              <i className="fa-brands fa-github"></i>SaraMoreiraG
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
