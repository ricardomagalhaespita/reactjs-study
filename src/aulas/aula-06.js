import React, { useState, useEffect } from 'react';

function App(){

const [distritos, setDistrito] = useState([]);

useEffect (()=>{
    // console.log("useEffect");

    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos";

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setDistrito(json);
    })

},[]);


  return(
    <div>
      <h1>Consultado API de Distritos Brasileiros</h1>

      <ul>
        {distritos.map( distrito => (
          <li key={distrito.id}>{distrito.nome} - {distrito.municipio.microrregiao.mesorregiao.UF.sigla}</li>
        ))}
      </ul>

      {/* <ul>
        {moveis.map( movie => (
          <li key={movie.id}>{movie.title} - {movie.releaseYear}</li>
        ))}
      </ul> */}

    </div>
  );
}

export default App;

