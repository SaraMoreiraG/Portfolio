import React from "react";
import { useTranslation } from 'react-i18next';

import "./getInTouch.css";

function GetInTouch() {
  const { t } = useTranslation();

  return (
    <div className="row" id="getInTouch">
      <div className="pe-4 col-6">
        <h2>
        {t('getintouch.code')}<span>{t('getintouch.innovation')}</span>
        </h2>
        <p className="description">{t('getintouch.description')}</p>
        <div className="d-flex justify-content-between my-5">
          <div className="block me-2">
            <i className="fa-solid fa-list-check"></i>
            <p className="quantity">6+</p>
            <p className="block-text">{t('getintouch.projects')}</p>
          </div>
          <div className="block me-2">
            <i className="fa-regular fa-comments"></i>
            <p className="quantity">5+</p>
            <p className="block-text">{t('getintouch.clients')}</p>
          </div>
        </div>
      </div>
      <div className="right-form col-6">
        <h1 className="form-title">{t('getintouch.form-title')}</h1>
        <p>{t('getintouch.form-p')}</p>
        <div className="form my-5">
          <input type="text" placeholder={t('getintouch.form-name')}></input>
          <input type="email" placeholder={t('getintouch.form-email')}></input>
          <input type="phone" placeholder={t('getintouch.form-phone')}></input>
          <textarea rows={6} placeholder={t('getintouch.form-message')}></textarea>
          <button className="btn-green col-4">{t('getintouch.form-button')}</button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
