import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Label from "../../Label/Label";

import TvShowStars from "../TvShowStars/TvShowStars";

import "./TvShow.css";

const { string, number } = PropTypes;

class TvShow extends Component {
  render() {
    return (
      <div className="TvShow">
        <Link to={`/show/${this.props.id}`} className="TvShow-movie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${this.props.backdropPath}`}
            alt=""
          />
          <div className="TvShow-movie-container">
            <span className="TvShow-movie-info">
              <div className="TvShow-movie-title-wrapper">
                <Label text={this.props.name} className="TvShow-movie-title" />
                <TvShowStars
                  count={5}
                  size={20}
                  edit={false}
                  value={this.props.rating / 2}
                  onChange={() => {}}
                  color2={"#ffd700"}
                />
              </div>
            </span>
            <p>Releashed On: {this.props.firstAirDate}</p>
          </div>
        </Link>
      </div>
    );
  }
}

TvShow.propTypes = {
  /**
   * The name of the show
   */
  name: string,
  /**
   * The id of the show in themoviedb.org
   */
  id: number,
  /**
   * The rating which could be from 1-10
   */
  rating: number,
  /**
   * The path of the poster image
   */
  posterPath: string,
  /**
   * The path of the backdrop image
   */
  backdropPath: string,
  /**
   * The first air date
   */
  firstAirDate: string
};

export default TvShow;
