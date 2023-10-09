import React from "react";
import "./getInTouch.css";

function GetInTouch() {
  return (
    <div className="row" id="getInTouch">
      <div className="pe-4 col-6">
        <h2>
          Design <span>and Innovation</span>
        </h2>
        <p className="description">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          auting fugit sed thisnquia consequuntur magni dolores eos designer
          heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est,
          oursqui dolorem ipsum quia dolor sit amet consectetur, adipisci velit,
          sed quia non numquam
        </p>
        <div className="d-flex justify-content-between my-5">
          <div className="block me-2">
            <i class="fa-solid fa-list-check"></i>
            <p className="quantity">10k+</p>
            <p className="block-text">Complete project</p>
          </div>
          <div className="block me-2">
            <i class="fa-regular fa-comments"></i>
            <p className="quantity">800+</p>
            <p className="block-text">Client review</p>
          </div>
        </div>
      </div>
      <div className="right-form col-6">
        <h1 className="form-title">GET TOUCH ME?</h1>
        <p>
          For your car we will do everything advice design in us repairs and
          maintenance We are the some preferred.
        </p>
        <div className="form my-5">
          <input type="text" placeholder="Your name"></input>
          <input type="email" placeholder="Your email"></input>
          <input type="phone" placeholder="Phone number"></input>
          <textarea rows={6} placeholder="Message"></textarea>
          <button className="btn-green col-4">submit now</button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
