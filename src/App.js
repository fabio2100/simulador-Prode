import './App.css';
import { Match } from './components/match';

function App() {

  const n = 10;
  const matchs = [...Array(n)].map((e,i)=>
    <Match key={i}/>
  )

  return (
    <div className='main'>
      {matchs}
    </div>
  );
}

export default App;
