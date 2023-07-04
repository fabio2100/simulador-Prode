import escudo from '../img/barsaescudo.png'

export function Match(){
  return (
    <>
    <div className="matchMain">
      <Team />
      <Puntuacion />
      <Puntuacion />
      <Puntuacion />
      <Team />
    </div>
    </>
  )
}


function Team(){
  return (
    <div className="team">
      <img src={escudo} className="img" alt="escudo equipo"></img>
    </div>)
}

function Puntuacion(){
  return (
    <input type="checkbox"></input>
  )
}