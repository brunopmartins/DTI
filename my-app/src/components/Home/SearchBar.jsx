import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import { fetchMovieSearch } from "../../actions";

const useStyles = makeStyles((theme) => ({
  Root: {
    height: "5vh",
    display: "flex",
    width: "80vw",
    justifyContent: "space-between",
    paddingBottom:"10vh"
  },
  InputsDiv: {
    display: "flex",
    width: "70vw",
  },
}));

const CustomButton = (props) => {
  const classes = useStyles();
  const [movie, setMovie] = useState("");
  const handleInputChange = (text) => {
    setMovie(text);
  };
  const handleClick = () => {
    console.log("am i clicking")
    props.fetchMovieSearch(movie);
  };
  return (
    <>
      <div className={classes.Root}>
        <div className={classes.InputsDiv}>
          <SearchInput
            placeHolder="Movie Title"
            borderRadius="20px"
            handleChange={handleInputChange}
          />
        </div>
        <SearchButton onClick={handleClick}> Search </SearchButton>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    movieSearch: state.movieSearch,
  };
};
export default connect(mapStateToProps, {
  fetchMovieSearch,
})(CustomButton);
