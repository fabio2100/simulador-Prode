import escudo from '../img/barsaescudo.png'

export function Match(props){
  return (
    <>
    <div className="matchMain">
      <Team />
      <Puntuacion name={props.num} isReadOnly={props.isReadOnly} resultado={props.resultado}/>
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
  const resultado = props.resultado; 

  const onChangeRadio = function(event){
    console.log(props.isReadOnly)
    console.log({resultado})
  }
  return (  
    <>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio} disabled={isReadOnly ? true : false} checked={resultado===0 && resultado }></input>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio} disabled={isReadOnly ? true : false} checked={resultado===1 && resultado }></input>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio} disabled={isReadOnly ? true : false} checked={resultado===2 && resultado }></input>         
    </>
  )
}