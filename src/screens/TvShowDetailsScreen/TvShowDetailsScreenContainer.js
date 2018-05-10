import { connect } from "react-redux";

import { asyncFetchShow, asyncFetchTrailer } from "../../state/actions";
import TvShowDetailsScreen from "./TvShowDetailsScreen";

const mapStateToProps = state => ({
  show: state.show,
  trailerId: state.trailerId
});

const mapDispatchToProps = dispatch => ({
  onFetchShow: id => dispatch(asyncFetchShow(id)),
  onFetchTrailer: id => dispatch(asyncFetchTrailer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TvShowDetailsScreen
);
