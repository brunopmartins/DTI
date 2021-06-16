import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import classNames from 'classnames';
import { connect } from "react-redux";
import _ from "lodash"

const useStyles = makeStyles(() => ({
  Root: {
    position: "fixed",
    left: "0",
    top: "0",
    height: "100%",
    width: "100%",
    display: "flex",
    background: "#141414",
    padding: "5vh 5vw 0 5vw ",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  MovieCover: {
    display: "flex",
    paddingBottom: "4vh",
  },
  MovieCoverInfoDiv:{
    display:"flex", 
    flexDirection:"column",
    alignSelf:"center"
  },
  MovieCoverInfo:{
    fontSize: "3.5vh",
    fontWeight: 'bold',
    paddingBottom: "0.5vh",
  },
  BasicText:{
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    alignContent:"center",
  },
  Image:{
    paddingRight:"10vw"
  },
}));


const Movie = (props) => {
  const classes = useStyles();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const detailsIndex = _.findIndex(props.movieSearch, (movieDetails) => {
      return movieDetails.imdbID === props.match.params.id;
    } )
    setMovie(props.movieSearch[detailsIndex])
  }, [props.movieSearch, props.match.params.id]);

  return (
    <>
      <div className={classes.Root}>
        <div className={classes.MovieCover}>
          <img className={classes.Image} src={movie.Poster} alt="movie"></img>
          <div className={classes.MovieCoverInfoDiv}>
            <div className={classNames(classes.BasicText,classes.MovieCoverInfo)}>{movie.Title}</div>
            <div className={classNames(classes.BasicText,classes.MovieCoverInfo)}>{movie.Genre}</div>
            <div className={classNames(classes.BasicText,classes.MovieCoverInfo)}>{movie.Year}</div>
          </div>
        </div>
        <div className={classes.PlotAndCast}>
          <div className={classNames(classes.BasicText, classes.MovieCoverInfo)}>Synopsis</div>
          <div className={classes.BasicText}>{movie.Plot}</div>
          <div className={classNames(classes.BasicText, classes.MovieCoverInfo)}>Director</div>
          <div className={classes.BasicText}>{movie.Director}</div>
          <div className={classNames(classes.BasicText, classes.MovieCoverInfo)}>Writer</div>
          <div className={classes.BasicText}>{movie.Writer}</div>
          <div className={classNames(classes.BasicText, classes.MovieCoverInfo)}>Cast</div>
          <div className={classes.BasicText}>{movie.Actors}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movieSearch: state.movieSearch,
  };
};
export default connect(mapStateToProps)(Movie)
