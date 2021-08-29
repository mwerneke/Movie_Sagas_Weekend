import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory();

    const movieDetail= useSelector(store=>store.movieDetail);
    //Call new store reducer

    const handleBack = () => {
        console.log('ButtonClicked for Back');
        history.push('/')
    }


    




// loops through movieDetail store information and based on server call delivers items individually

    return (
        <>
           

            <h2>Details:</h2>
           <ul>
                {movieDetail.map(movie => {
                    return (
                        <li key={movie.id}>
                            
                            <img src ={movie.movieimage}/>
                            <h2>{movie.moviegenres}</h2>
                            <h3>{movie.moviedescription}</h3>
                        </li>
                    );
                })}
            </ul>


         
            <button onClick={handleBack}>Back to List</button>
        </>
    )
}

export default Details
