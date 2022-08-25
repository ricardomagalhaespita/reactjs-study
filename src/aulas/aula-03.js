import {useState} from 'react';

function App() {
  const [aluno,setAluno] = useState('');
  const [email,setEmail] = useState('');
  const [idade,setIdade] = useState('');

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

      <form>
        <label>Nome:</label>
        <input
        placeholder="Digite seu nome"
        value={aluno}
        onChange={(e) => setAluno(e.target.value)}
        />

        <br/>
        <label>Idade:</label>
        <input
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        />

        <br/>
        <label>E-mail:</label>
        <input
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setIdade(e.target.value)}
        />
        
      </form>

    </div>
  );
}

export default App;

function Nome(props){
  return(
    <p>{props.nome} - {props.idade} </p>
  );
}