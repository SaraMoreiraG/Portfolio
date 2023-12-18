import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./getInTouch.css";

function GetInTouch() {
  const { t } = useTranslation();
  const [emailInfo, setEmailInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, message } = emailInfo;

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      });

      const data = await response.json();
      console.log("Server Response:", data);

      // Handle the response as needed (e.g., show a success message to the user)
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="row" id="getInTouch">
      <div className="pe-4 col-6">
        <h2>
          {t("getintouch.code")}
          <span>{t("getintouch.innovation")}</span>
        </h2>
        <p className="description">{t("getintouch.description")}</p>
        <div className="d-flex justify-content-between my-5">
          <div className="block me-2">
            <i className="fa-solid fa-list-check"></i>
            <p className="quantity">6+</p>
            <p className="block-text">{t("getintouch.projects")}</p>
          </div>
          <div className="block me-2">
            <i className="fa-regular fa-comments"></i>
            <p className="quantity">5+</p>
            <p className="block-text">{t("getintouch.clients")}</p>
          </div>
        </div>
      </div>
      <div className="right-form col-6">
        <h1 className="form-title">{t("getintouch.form-title")}</h1>
        <p>{t("getintouch.form-p")}</p>
        <div className="form my-5">
          <input
            type="text"
            name="name"
            placeholder={t("getintouch.form-name")}
            value={emailInfo.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("getintouch.form-email")}
            value={emailInfo.email}
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder={t("getintouch.form-phone")}
            value={emailInfo.phone}
            onChange={handleChange}
          />
          <textarea
            rows={6}
            name="message"
            placeholder={t("getintouch.form-message")}
            value={emailInfo.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn-green col-4"
            onClick={handleSubmit}
          >
            {t("getintouch.form-button")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
