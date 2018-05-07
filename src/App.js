import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./state/store";
import TvShowsScreenContainer from "./screens/TvShowsScreen/TvShowsScreenContainer";
import TvShowDetailsScreenContainer from "./screens/TvShowDetailsScreen/TvShowDetailsScreenContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={TvShowsScreenContainer} />
            <Route path="/show/:id" component={TvShowDetailsScreenContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
