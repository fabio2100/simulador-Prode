import { useState } from 'react';
import './App.css';
import { Match } from './components/match';

function App() {

  const [resultados,setResultados] = useState([]);
  const [simulado,setSimulado] = useState(false)
  const n = 8;
  const matchs = [...Array(n)].map((e,i)=>
    <Match key={i} num={i} numberOfMatch={i}/>
  )

  const restulsMatch = ([...Array(n)].map((e,i)=>
    <Match key={i+n} num={i+n} isReadOnly={true} resultado={Math.floor(Math.random()*3)}  numberOfMatch={i}/>
  ))

  
  const simular = prevComponents => function() {
    console.log(restulsMatch)
    setResultados(restulsMatch)
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
      value="Simular voto"
      class="btnSimular"
      onClick={simular()}
    >
      Simular resultados<i class="fas fa-vote-yea"></i>
    </button>
    </div>
  );
}

export default App;
