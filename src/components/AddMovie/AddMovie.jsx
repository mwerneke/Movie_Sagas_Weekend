import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddMovie.css";
import Button from "@material-ui/core/Button";

function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();

  let [genre, setGenre] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [url, setUrl] = useState("");

  const postMovie = () => {
    //Runs the detail that are taken in form and delivers to index.js
    dispatch({
      type: "POST_MOVIE",
      payload: {
        title: title,
        description: description,
        poster: url,
        genre_id: genre, //genre_id table column
      },
    });
    history.push("/");
  };

  const handleCancel = () => {
    console.log("Cnc Btn"); //Canc
    history.push("/");
  };

  const handleGenre = (event) => {
    console.log("Genre handler");
    setGenre(event.target.value); // Handling Input for Genre
  };
  const handleDescription = (event) => {
    console.log("Desc handler");
    setDescription(event.target.value); // Handling Input for Description
  };
  const handleTitle = (event) => {
    //Handling Input for Title
    console.log("titlehandle");
    setTitle(event.target.value);
  };

  const handleUrl = (event) => {
    console.log("UrlHandle"); //Handling Img URl
    setUrl(event.target.value);
  };

  const handleBackBtn = () => {
    //Sends user Back to MovieList (Main)
    history.push("/");
  };

  return (
    <div>
      <form name="frm" onSubmit={postMovie}>
        <input
          className="title"
          onChange={handleTitle}
          placeholder="Movie Title"
        />
        <br />
        <input
          className="description"
          onChange={handleDescription}
          placeholder="Movie Description"
        />
        <br />
        <input
          className="url"
          onChange={handleUrl}
          placeholder="Movie Image Url"
        />
        <br />
        {/* HardCoded select inputs */}

        <select className="dropdown" placeholder="" onChange={handleGenre}>
          <option value="0"></option>
          <option value="1">Adventure</option>
          <option value="2">Animated</option>
          <option value="3">Biographical</option>
          <option value="4">Comedy</option>
          <option value="5">Diaster</option>
          <option value="6">Drama</option>
          <option value="7">Epic</option>
          <option value="8">Fantasy</option>
          <option value="9">Musical</option>
          <option value="10">Romantic</option>
          <option value="11">Science Fiction</option>
          <option value="12">Space-Opera</option>
          <option value="13">Superhero</option>
        </select>
        <br />
        <Button
          variant="contained"
          color="secondary"
          className="cancel"
          onClick={handleCancel}
          type="submit"
        >
          Cancel
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          className="add"
          type="submit"
        >
          Add Movie
        </Button>
        {/* <button onClick={handleBackBtn}/> */}
      </form>
      <br />
      <Button
        variant="contained"
        color="secondary"
        className="return"
        onClick={handleBackBtn}
      >
        Return to Movies
      </Button>
    </div>
  );
}

export default AddMovie;
