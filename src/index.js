import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchGenres);
  yield takeEvery("POST_MOVIE", postMovie);
  yield takeEvery("MOVIE_DETAILS", detail);
}
function* detail(action) {
  //Setup intially to get movie clicked on (Details) for Details page

  try {
    const info = yield axios.get(`/api/movie/${action.payload}`);
    console.log("get movie Detail:", info.data);
    yield put({
      type: "SET_MOVIES",
      payload: info.data,
    });
  } catch {
    console.log("get all error");
  }
}

function* fetchAllMovies() {
  //Provided

  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({
      type: "SET_MOVIES",
      payload: movies.data,
    });
  } catch {
    console.log("get all error");
  }
}

function* fetchGenres() {
  try {
    const genres = yield axios.get("/api/genre");
    console.log("fetch genrees", genres.data);
    yield put({
      type: "SET_GENRES",
      payload: "genres.data",
    });
  } catch {
    console.log("Genres Error");
  }
}

function* postMovie(action) {
  try {
    const response = yield axios.post("/api/movie", action.payload);
    console.log(response.data);
    yield put({
      type: "FETCH_MOVIES",
    });
  } catch (error) {
    console.log("Post movie Error", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const movieDetail = (state = [], action) => {
  if (action.type === "SET_MOVIES") {
    // This is accessed at Details page for setting movie details
    return action.payload;
  }
  return state;
};
//

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres+
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetail,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
