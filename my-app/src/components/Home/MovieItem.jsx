import React from "react";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import _ from "lodash";

const useStyles = makeStyles(() => ({
  Root: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    width: "15vw",
  },
  ImageContainer: {},
  RatingHover: {
    zIndex: "2",
  },
  MovieTitle: {
    fontSize: "2em",
  },
  BasicText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#FFFFFF",
    alignContent: "center",
    textAlign: "center",
  },
  Image: {
    width: "12vw",
  },
}));

const MovieItem = ({ poster, ratings, title, id, ...props }) => {
  const classes = useStyles();

  const getRating = () => {
    const ratingsParsed = _.map(ratings, (rating) => {
      if (rating.Source === "Internet Movie Database")
        return _.split(rating.Value, "/", 1)[0] / 1 ;
      if (rating.Source === "Rotten Tomatoes")
        return _.replace(rating.Value, "%", "") / 10;
      if (rating.Source === "Metacritic")
        return _.split(rating.Value, "/", 1)[0] / 10;
    });

    return Number(_.mean(ratingsParsed)).toFixed(2) + "/10";
  };

  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className={classes.Root}>
          <div className={classes.ImageContainer}>
            <img className={classes.Image} src={poster} alt="movie"></img>
            <div className={classNames(classes.BasicText, classes.RatingHover)}>
              {getRating()}
            </div>
          </div>
          <div className={classNames(classes.BasicText, classes.MovieTitle)}>
            {title}
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieItem;
