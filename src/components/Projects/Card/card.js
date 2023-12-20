import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div className="box">
        <img className="pic-1" src={props.imageSrc} alt="Web project" />
        <div className="box-content">
          <h3 className="title">{props.name}</h3>
          <span className="post">{props.post}</span>
          <ul className="icon">
            {props.link ? (
              <li>
                <a
                  href={props.link}
                  className="fa fa-link"
                  target="blank"
                  alt="link to project"
                > </a>
              </li>
            ) : (
              ""
            )}
            {props.github ? (
              <li>
                <a
                  href={props.github}
                  className="fa fa-github"
                  target="blank"
                  alt="link to github"
                > </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
