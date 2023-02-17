import React, { Component } from "react";
import { movies } from "../moviesCont";
import "../Banner/banner.css";

export default class Banner extends Component {
  render() {
    let moviesArr = movies.results;
    console.log(moviesArr);

    return (
      <>
        {!moviesArr ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade banner"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active banner-card">
                <img src= {`https://image.tmdb.org/t/p/original${moviesArr[17].backdrop_path}`} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block banner-info-box">
                  <h5 className="banner-title">{moviesArr[17].original_title}</h5>
                  <p className="banner-info">
                  {moviesArr[17].overview}
                  </p>
                </div>
              </div>
              <div className="carousel-item  banner-card">
              <img src= {`https://image.tmdb.org/t/p/original${moviesArr[1].backdrop_path}`} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block banner-info-box">
                  <h5 className="banner-title">{moviesArr[1].original_title}</h5>
                  <p className="banner-info">
                  {moviesArr[1].overview}
                  </p>
                </div>
              </div>
              <div className="carousel-item  banner-card">
              <img src= {`https://image.tmdb.org/t/p/original${moviesArr[2].backdrop_path}`} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block banner-info-box">
                  <h5 className="banner-title">{moviesArr[2].original_title}</h5>
                  <p className="banner-info">
                  {moviesArr[2].overview}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </>
    );
  }
}
