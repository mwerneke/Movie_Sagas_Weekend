import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'

function MovieList() {

    const history = useHistory()
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_MOVIES'
        });
        dispatch({
            type: 'FETCH_GENRES'
        });

    }, []);

    const seeDetails = (details) => {
        console.log('In See Details', details);
        dispatch({
            type: 'MOVIE_DETAILS',
            payload: details
        })

        history.push('/details')
    }

    const handleAdd = () => {
        history.push('/addmovie')
    }

    //Function setup for OnClick of movie image and delivered back to index.JS
    //with the See details dispatch

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={handleAdd}>Add a Movie</button>
            {/* Goes through movies */}
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={event => seeDetails(movie.id)} src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}


            </section>
        </main>

    );
}

export default MovieList;