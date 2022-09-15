import { useState, useEffect } from 'react';

function App(){
  const [input, setInput] = useState('');
  const [tarefa, setTarefas] = useState([
    'Estudar Flutter',
    'Estudar React JS'
   ]);


   useEffect(() => {
    alert('useEffect')
  }, []);

  useEffect(() => {
    alert('useEffect - tarefas')
  }, [tarefa]);

  function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefa, input]);
    localStorage.setItem('@tarefas', tarefa);
    setInput('');

    const test = localStorage.getItem('@tarefas')
    alert("Foi adicionado a lista: "+ test)
  }

  return(
    <div>
      <h1>Cadastrando Tarefas</h1>

      <form onSubmit={handleRegister}>
        <label>Tarefa:</label><br/>
        <input 
         placeholder="Digite uma tarefa" 
         value={input}
         onChange={ (e) => setInput(e.target.value) 
        }
        
        /><br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      {
      <ul>
        {tarefa.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul> }
      {/* {tarefas} */}

    </div>
  );
  
  
}

export default App;

