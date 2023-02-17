import React, { Component } from "react";
import { movies } from "../moviesCont";
import "../Movies/movies.css";

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      isInCard: "",
      page: [1],
    };
  }
  render() {
    let moviesArr = movies.results;
    console.log(moviesArr);
    return (
      <div className="movies-card-cont">
        <div>Trading</div>
        {!moviesArr ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="movie-card-box">
            {moviesArr.map((movieObj, i) => {
              return (
                <div
                  key={i}
                  className="card movies-card"
                  onMouseEnter={(e) => {
                    this.setState({ isInCard: movieObj.id });
                  }}
                  onMouseLeave={(e) => {
                    this.setState({ isInCard: movieObj.id });
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top movie-card-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title movies-card-title">
                      {movieObj.original_title}
                    </h5>
                    <p className="card-text movies-card-info">
                      <span>
                        {movieObj.vote_average}{" "}
                        <span className="material-symbols-outlined">grade</span>
                      </span>
                      {this.state.isInCard == movieObj.id && (
                        <button className="btn btn-primary movies-card-btn ">
                          Add To WatchList
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="pagination-cont">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              {this.state.page.map((pageNo, i) => {
                return (
                  <li key={i} className="page-item">
                    <a className="page-link" href="#">
                      {pageNo}
                    </a>
                  </li>
                );
              })}

              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
