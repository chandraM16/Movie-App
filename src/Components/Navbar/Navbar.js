import React, { Component } from "react";
import "../Navbar/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <h1 className="nav-title">Movies</h1>
          <h2 className="nav-fav">Favorite</h2>
        </div>
      </>
    );
  }
}
