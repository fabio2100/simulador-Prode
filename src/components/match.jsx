import escudo from '../img/barsaescudo.png'

export function Match(props){
  return (
    <>
    <div className="matchMain">
      <Team />
      <Puntuacion name={props.num} isReadOnly={props.isReadOnly}/>
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

function Puntuacion(props){
  const isReadOnly = props.isReadOnly;

  const onChangeRadio = function(event){
    console.log(props.isReadOnly)
  }
  return (
    <>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio} disabled={isReadOnly ? true : false}></input>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio} disabled={isReadOnly ? true : false}></input>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio} disabled={isReadOnly ? true : false}></input>         
    </>
  )
}