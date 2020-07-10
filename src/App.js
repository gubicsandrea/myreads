import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ShelfPage from "./ShelfPage";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ShelfPage} />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
