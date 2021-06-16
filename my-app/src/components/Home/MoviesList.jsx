import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import MovieItem from "./MovieItem.jsx";
import _ from "lodash";

const useStyles = makeStyles(() => ({
  Root: {
    width: "70vw",
    display: "flex",
  },
  List: {
    height: "75vh",
    display: "flex",
    overflowX: "scroll",
    flexWrap: "nowrap",
    width: "90vw",
  },
}));

const MoviesList = ({ movies, ...props }) => {
  const classes = useStyles();
  // const [showRating, setShowRating] = useState(false);

  return props.movieSearch ? (
    <>
      <div className={classes.List}>
        {_.map(props.movieSearch, (movie) => {
          return (
            <>
              <MovieItem
                title={movie.Title}
                poster={movie.Poster}
                id={movie.imdbID}
                ratings={movie.Ratings}
              />
            </>
          );
        })}
      </div>
    </>
  ) : null;
};
const mapStateToProps = (state) => {
  return {
    movieSearch: state.movieSearch,
  };
};
export default connect(mapStateToProps)(MoviesList);
