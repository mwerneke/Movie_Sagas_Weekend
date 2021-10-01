import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import AddMovie from "../AddMovie/AddMovie";
import Mailer from "../Mailer/Mailer";
import Editor from "../Editor/Editor";


function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>Weekend Movie Saga</h1>
      </div>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>
        <Route path="/mail" exact>
          <Mailer />
        </Route>
        <Route path="/editor" exact>
          <Editor />
        </Route>
        
        {/* Add Movie page */}
      </Router>
      <footer className="footer"> © MW 2021</footer>
    </div>
  );
}

export default App;
