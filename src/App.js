import React, { useState, useEffect } from "react";
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
    // This will run at the beginning of the run because of the [] argument
    useEffect(() => {
        searchMovies('Kevin');
    }, [])
    
    // States for changing imputs
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Method to get the movie based on title input
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    // This shows up on the page
    return (
        // Big div for the entire page
        <div className="app">
            {/* Movie title */}
            <h1> Movieland </h1>

            {/* Search box and search icon */}
            <div className="search">
                {/* Text box */}
                <input 
                    placeholder="Search for movies"
                    // This is how the text in the box changes as you type
                    value={searchTerm}
                    // When typed, the event calls the change to the state
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Click to activate the search */}
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {/* Movie cards */}

            {/* Actual js */}
            { movies?.length > 0 ? (
                // Maps all the movies in the array with a component 
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    )
};

export default App;