import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Board from "./pages/board"

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/board">
          <button>Board</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/board" component={Board} />
        </Switch>
      </main>
      <footer>
        <p>KUAAA</p>
      </footer>
    </Router>
  );
}

export default App;
