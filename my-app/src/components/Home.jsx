import React from "react";
import { makeStyles } from "@material-ui/styles";
import MoviesList from "./Home/MoviesList.jsx";
import SearchBar from "./Home/SearchBar";
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
    // justifyContent: "space-around"
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Root}>
        <SearchBar />
        <MoviesList />
      </div>
    </>
  );
};

export default Home;
