import {useState} from 'react';

function App() {
  const [aluno,setAluno] = useState('Aluno SI');
  
function changeName(){
  setAluno('I.T Student')
}

  return (
    <div>
      <h1>Aula 03</h1>
      <h2>Hello {aluno} </h2>


      <button onClick={changeName}>Change Name</button>
 

      <Nome nome="Ricardo Pita" idade="20"/>
      <Nome nome="Paulo Muzy" idade="40"/>
      <Nome nome="xxxxxx" idade="9999"/>
    </div>
  );
}

export default App;

function Nome(props){
  return(
    <p>{props.nome} - {props.idade} </p>
  );
}