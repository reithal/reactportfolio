import React, { Component } from "react";
import Video from "./components/Video";
import Project from "./components/Project";
import About from "./components/About"
import "./App.css";


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Video />
        <Project />
        <About />
        </div>
      </div>
    );
  }
}

export default App;
