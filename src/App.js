import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Author from "./components/author";
import Books from "./components/books";
import Budget from "./components/budget";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/books/:authorId" component={Books} />
        <Route path="/budget/" component={Budget} />
        <Route path="/" exact component={Author} />
      </Router>
    </div>
  );
}

export default App;
