import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

const App = () =>
// Router is the top level parent object. Can only have one child, must be wrapped in one element
  <Router>
    <div>
      <Navpills />
      {/* exact and regular supposed to mean exact route only (doesn't seem to work) 
      define a path and a component to render when path matches*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>;

export default App;
