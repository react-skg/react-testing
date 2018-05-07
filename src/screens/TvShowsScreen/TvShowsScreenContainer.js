import { connect } from "react-redux";
import { asyncFetchShows } from "../../state/actions";
import TvShowsScreen from "./TvShowsScreen";

const mapStateToProps = state => ({
  shows: state.shows
});

const mapDispatchToProps = dispatch => ({
  onFetchShows: () => dispatch(asyncFetchShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsScreen);
