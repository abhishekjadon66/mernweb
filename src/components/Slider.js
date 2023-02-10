import React from "react";
import a from "./image/a.jpg";
import b from "./image/b.jpg";
import c from "./image/h.jpg";
const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={a}
              className="d-block"
              alt="..."
              style={{ width: "100%", height: "35rem" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={b}
              className="d-block"
              alt="..."
              style={{ width: "100%", height: "35rem", height: "35rem" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={c}
              className="d-block"
              alt="..."
              style={{ width: "100%", height: "35rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
