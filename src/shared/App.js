import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, About } from "pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
