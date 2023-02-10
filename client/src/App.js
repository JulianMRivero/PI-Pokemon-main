import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import FormCreate from "./components/FormCreate/FormCreate";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import PokeCardDetail from "./components/PokeCardDetail/PokeCardDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/create" component={FormCreate}></Route>
          <Route exact path="/pokedetail/:id" component={PokeCardDetail} />
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
