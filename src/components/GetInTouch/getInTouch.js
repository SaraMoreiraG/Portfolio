import React from "react";
import "./getInTouch.css";

function GetInTouch() {
  return (
    <div className="row" id="getInTouch">
      <div className="pe-3 col-6">
        <h2>Design <span>and Innovation</span></h2>
        <p>
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
    </div>
  );
}

export default GetInTouch;
