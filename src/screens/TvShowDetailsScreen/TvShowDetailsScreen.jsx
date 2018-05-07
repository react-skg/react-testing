import React, { Component } from "react";
import { string } from "prop-types";

import TvShowDetails from "../../components/TvShows/TvShowDetails/TvShowDetails";

class TvShowDetailsScreen extends Component {
  componentDidMount() {
    this.props.onFetchShow(this.props.match.params.id);
    this.props.onFetchTrailer(this.props.match.params.id);
  }

  handleChange(e) {
    this.setState({ searchFieldValue: e.target.value });
  }

  render() {
    const { show } = this.props;

    return (
      <div className="App">
        <TvShowDetails
          name={show.name}
          overview={show.overview}
          id={show.id}
          rating={show.vote_average}
          posterPath={show.poster_path}
          backdropPath={show.backdrop_path}
          firstAirDate={show.first_air_date}
          genres={show.genres}
          trailerId={this.props.trailerId}
        />
      </div>
    );
  }
}

TvShowDetailsScreen.defaultProps = {
  trailerId: string.isRequired
};

export default TvShowDetailsScreen;
