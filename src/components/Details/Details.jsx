import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Details.css";

function Details() {
  const history = useHistory();

  const movieDetail = useSelector((store) => store.movieDetail);
  //Call new store reducer

  const handleBack = () => {
    console.log("ButtonClicked for Back");
    history.push("/");
  };

  // loops through movieDetail store information and based on server call delivers items individually

  return (
    <>
      <h2 className="title">Movie Details:</h2>

      {movieDetail.map((movie) => {
        return (
          <li key={movie.id}>
            <img src={movie.movieimage} />
            <h2 className="genre">{movie.moviegenres}</h2>
            <h3 className="desc">{movie.moviedescription}</h3>
          </li>
        );
      })}

      <Button variant="contained" color="secondary" onClick={handleBack}>
        Back to List
      </Button>
    </>
  );
}

export default Details;
