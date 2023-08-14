import React from "react";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading_container">
      {/* <img
        className="rotating-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKM6-y8UlBBePx5RfihwPy_XAQVrjyN0nng&usqp=CAU"
      /> */}
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
}
