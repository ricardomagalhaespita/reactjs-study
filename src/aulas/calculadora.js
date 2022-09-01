import {useState} from 'react';

function App() {
  const [primeiroValor,setPrimeiro] = useState('');
  const [segundoValor,setSegundo] = useState('');
  const [resultado,setResultado] = useState('');

  function Soma(){
    setResultado(parseInt(primeiroValor) + parseInt(segundoValor))
  }
  function Subtracao(){
    setResultado(parseInt(primeiroValor) - parseInt(segundoValor))
  }
  function Multiplicacao(){
    setResultado(parseInt(primeiroValor) * parseInt(segundoValor))
  }
  function Divisao(){
    setResultado(parseInt(primeiroValor) / parseInt(segundoValor))
  }
  function Limpar(){
    setPrimeiro("");
    setSegundo("");
    setResultado("");
  }


  return (
    <div style={{textAlign: "Center", backgroundColor: "lightblue", fontFamily: 'Consolas'}}>
      <h2>Calculadora!</h2>
  
      <form>
      <b><label>Digite o Primeiro Valor:</label></b>
        <br/>
        <input
        placeholder=""
        value={primeiroValor}
        onChange={(e) => setPrimeiro(e.target.value)}
        />

        <br/>
        <b><label>Digite o Segundo Valor:</label></b>
        <br/>
        <input
        placeholder=""
        value={segundoValor}
        onChange={(e) => setSegundo(e.target.value)}
        />

        <br/>
        <b><label>Resultado:</label></b>
        <br/>
        <input
        placeholder=""
        value={resultado}
        onChange={(e) => setSegundo(primeiroValor + segundoValor)}
        />

      </form>
      <br/>

      <button onClick={Soma}>Soma</button>
      <button onClick={Subtracao}>Subtração</button>
      <button onClick={Multiplicacao}>Multiplicação</button>
      <button onClick={Divisao}>Divisão</button>
      <button onClick={Limpar}>Limpar</button>
     
    </div>
  );
}

export default App;

