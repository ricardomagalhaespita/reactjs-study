
function App() {
  return (
    <div>
      <h1>Hello World!!</h1>

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