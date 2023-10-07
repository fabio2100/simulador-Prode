import { useState } from 'react';
import './App.css';
import { Match } from './components/match';

function App() {
  

  const n = 8;
  const matchs = [...Array(n)].map((e,i)=>
  <Match key={i} num={i} numberOfMatch={i} isReadOnly={false} />
  )
  
  const restulsMatch = ([...Array(n)].map((e,i)=>
  <Match key={i+n} num={i+n} isReadOnly={true}  numberOfMatch={i}/>
  ))
  
  
  const [resultados,setResultados] = useState([restulsMatch])
  
  const simular = prevComponents => function() {
    const restulsMatchSimulado = ([...Array(n)].map((e,i)=>
    <Match key={i+n} num={i+n} isReadOnly={true} resultado={Math.floor(Math.random()*3)+1}  numberOfMatch={i}/>
  ))
    console.log(restulsMatchSimulado)
    setResultados(restulsMatchSimulado)
    console.log({matchs})
  }



  return (
    <div className='main'>
      <div id="pronosticos">
         <h1>Su pronóstico</h1>
         {matchs}
      </div>
      <div id="resultados">
        <h1>Resultados</h1>
        {resultados}
      </div>
      <button
      type="button"
      value="Simular"
      class="btnSimular"
      onClick={simular()}
    >
      Simular resultados<i class="fas fa-vote-yea"></i>
    </button>
    </div>
  );
}

export default App;
