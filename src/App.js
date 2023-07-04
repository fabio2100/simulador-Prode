import './App.css';
import { Match } from './components/match';

function App() {

  const n = 5;
  const matchs = [...Array(n)].map((e,i)=>
    <Match key={i} num={i}/>
  )

  const resultsMatch = [...Array(n)].map((e,i)=>
    <Match key={i+n} num={i+n} />
  )

  return (
    <div className='main'>
      <div id="pronosticos">
         <h1>Su pronóstico</h1>
         {matchs}
      </div>
      <div id="resultados">
        <h1>Resultados</h1>
        {resultsMatch}
      </div>
    </div>
  );
}

export default App;
