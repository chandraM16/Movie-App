import React, { Component } from "react";
// import { movies } from "../moviesCont";
import "../Movies/movies.css";
import axios from "axios";

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      isInCard: "",
      pageNo: [1],
      currPage: 1,
      movies: [],
    };
    console.log("constructor");
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
    console.log(data);
    console.log("mount");
  }

  changeMovies = async () => {
    console.log(this.state.currPage);
    let urlResult = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=fbeee1a4bf1091796397b7e151f8e240&language=en-US&page=${this.state.currPage}`
    );
    const data = urlResult.data;
    this.setState({
      movies: [...data.results],
    });
  };

  handleNextMoviesClick = () => {
    let tempAr = [];
    for (let i = 0; i < this.state.pageNo.length + 1; i++) {
      tempAr.push(i + 1);
    }

    this.setState(
      {
        pageNo: [...tempAr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handlePrevMoviesClick = () => {
    if (this.state.currPage !== -1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handlePageClick = (value) => {
    if (this.state.currPage !== value) {
      this.setState(
        {
          currPage: value,
        },
        this.changeMovies
      );
    }
  };

  render() {
    console.log("render");

    return (
      <div className="movies-card-cont">
        <div>Trading</div>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="movie-card-box">
            {this.state.movies.map((movieObj, i) => {
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
                <a className="page-link" onClick={this.handlePrevMoviesClick}>
                  Previous
                </a>
              </li>
              {this.state.pageNo.map((pageNo, i) => {
                return (
                  <li key={i} className="page-item">
                    <a
                      className="page-link"
                      onClick={() => {
                        this.handlePageClick(pageNo);
                      }}
                    >
                      {pageNo}
                    </a>
                  </li>
                );
              })}

              <li className="page-item">
                <a className="page-link" onClick={this.handleNextMoviesClick}>
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
