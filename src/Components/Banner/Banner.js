import React, { Component } from "react";
import { movies } from "../moviesCont";
import "../Banner/banner.css";
import axios from "axios";

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    // all side effect work will execute here
    let urlResult = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=fbeee1a4bf1091796397b7e151f8e240&language=en-US&page=${this.state.currPage}`
    );
    const data = urlResult.data;
    this.setState({
      movies: [...data.results],
    });
  }

  render() {
    let moviesArr = movies.results;
    // console.log(moviesArr);

    return (
      <>
        {this.state.movies.length === 0 ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade banner"
          >
            <div className="carousel-inner ">
              <div className="carousel-item  banner-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${this.state.movies[5].backdrop_path}`}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block banner-info-box">
                  <h5 className="banner-title">
                    {this.state.movies[5].original_title}
                  </h5>
                  <p className="banner-info">{this.state.movies[5].overview}</p>
                </div>
              </div>
              <div className="carousel-item active banner-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${this.state.movies[4].backdrop_path}`}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block banner-info-box">
                  <h5 className="banner-title">
                    {this.state.movies[4].original_title}
                  </h5>
                  <p className="banner-info">{this.state.movies[4].overview}</p>
                </div>
              </div>
              <div className="carousel-item  banner-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${this.state.movies[8].backdrop_path}`}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block banner-info-box">
                  <h5 className="banner-title">
                    {this.state.movies[8].original_title}
                  </h5>
                  <p className="banner-info">{this.state.movies[8].overview}</p>
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
