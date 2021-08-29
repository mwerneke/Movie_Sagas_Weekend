import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>Weekend Movie Saga</h1>
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

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
