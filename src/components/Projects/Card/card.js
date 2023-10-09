import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="col-md-4 col-sm-6 mb-5">
      <div className="box">
        <img className="pic-1" src={props.imageSrc} alt="Web project" />
        <div className="box-content">
          <h3 className="title">{props.name}</h3>
          <span className="post">{props.post}</span>
          <ul className="icon">
            <li>
              <a href={props.link} className="fa fa-link" target="blank"></a>
            </li>
            {props.github ? (
              <li>
                <a
                  href={props.github}
                  className="fa fa-github"
                  target="blank"
                ></a>
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
