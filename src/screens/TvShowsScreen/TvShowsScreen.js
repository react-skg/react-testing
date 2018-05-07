import React, { Component } from "react";

import Toolbar from "../../components/Toolbar/Toolbar";
import TvShows from "../../components/TvShows/TvShows";

class TvShowsScreen extends Component {
  constructor() {
    super();

    this.state = { searchFieldValue: "" };
  }

  componentDidMount() {
    this.props.onFetchShows();
  }

  handleChange = e => {
    this.setState({ searchFieldValue: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          searchFieldValue={this.state.searchFieldValue}
          onSearchFieldChange={this.handleChange}
        />
        <TvShows
          shows={this.props.shows.filter(show =>
            show.name
              .toLowerCase()
              .includes(this.state.searchFieldValue.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default TvShowsScreen;
