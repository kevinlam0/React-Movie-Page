import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=5e304f4c';
const movie1 = {
    "Title": "Spider-Man Title Reveal",
    "Year": "2021",
    "imdbID": "tt14122734",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
}

const App = () => {
    // Hook for Setting the list of movies
    const [movies, setMovies] = useState([]);

    // Fetches the movie API for the data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    // Runs once at the beginning of the program
    useEffect(() => { searchMovies('Spider-man') }, []);

    // How the app is shown
    return (
        <div className = "app">
            <h1>BIG MOVIES</h1>
            <div className = "search">
                <input 
                    placeholder = "Search for Movies"
                    value = ""
                    onChange = {() => {}}
                />
                <img 
                    src = {SearchIcon}
                    alt = "search"
                    onClick = {() => {}}
                />
            </div>
            {
                movies.length > 0
                    ? (
                        <div className = "container"> 
                            <MovieCard movie = {movies[0]}/>
                        </div>
                    ) : (
                        <div className = "empty"> 
                            <h2>No movies found</h2>
                        </div> 
                    )
            };
        </div>
    )
};

export default App;