import React, { useState, useEffect } from 'react';

function App(){

const [moveis, setMovies] = useState([]);

useEffect (()=>{
    // console.log("useEffect");

    let url = "https://reactnative.dev/movies.json";

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.movies);
        setMovies(json.movies);
    })

},[]);


  return(
    <div>
      <h1>Consultado API</h1>


      <ul>
        {moveis.map( movie => (
          <li key={movie.id}>{movie.title} - {movie.releaseYear}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

