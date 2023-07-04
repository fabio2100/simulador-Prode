import escudo from '../img/barsaescudo.png'

export function Match(props){
  return (
    <>
    <div className="matchMain">
      <Team />
      <Puntuacion name={props.num}/>
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

function Puntuacion(i){
  

  const onChangeRadio = function(event){
    console.log(event.target.value)
  }
  return (
    <>
        <input type="radio" className='radioButton' name={i.name} onChange={onChangeRadio}></input>
        <input type="radio" className='radioButton' name={i.name} onChange={onChangeRadio}></input>
        <input type="radio" className='radioButton' name={i.name} onChange={onChangeRadio}></input>  
    </>
  )
}