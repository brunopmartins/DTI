import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import Home from "./components/Home";
import Movie from "./components/Movie";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
            <Route path="/" component={Home} />
            <Route path="/movies/:id" component={Movie} />
        </Provider>
      </Router>
    );
  }
}

export default App;
