import './App.css';
import { Match } from './components/match';

function App() {

  const n = 8;
  const matchs = [...Array(n)].map((e,i)=>
    <Match key={i} num={i} numberOfMatch={i}/>
  )

  let resultsMatch = [...Array(n)].map((e,i)=>
    <Match key={i+n} num={i+n} isReadOnly={true} resultado={4} numberOfMatch={i}/>
  )

  const simular = value => () => {
    /*resultsMatch.forEach((match)=>{
      const resultOfMatch = Math.floor(Math.random()*3)
      console.log({resultOfMatch});
      console.log({match})
      match.props.resultado = resultOfMatch;
      
    })*/
    const resultOfMatch = Math.floor(Math.random()*3);
    let resultsMatch = [...Array(n)].map((e,i)=>{
      <Match key={i+n} num={i+n} isReadOnly={true} resultado={4} numberOfMatch={i}/>   
    }) 
  }

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
