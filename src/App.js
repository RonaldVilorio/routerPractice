import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} />
          <Route component={Error} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
