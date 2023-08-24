import escudo from '../img/barsaescudo.png';
import { useState } from 'react';

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
  const [elegido,setElegido] = useState();
  const isReadOnly = props.isReadOnly;
  var resultado = props.resultado; 

  const onChangeRadio1 = function(event){
    setElegido(1);
  }
  const onChangeRadio2 = function(event){
    setElegido(2);
  }
  const onChangeRadio3 = function(event){
    setElegido(3);
  }
  return (  
    <> 
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio1}  disabled={isReadOnly ? true : false} checked={resultado===1 || elegido === 1}></input>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio2}  disabled={isReadOnly ? true : false} checked={resultado===2 || elegido === 2}></input>
        <input type="radio" className='radioButton' name={props.name}  onChange={onChangeRadio3} disabled={isReadOnly ? true : false} checked={resultado===3 || elegido === 3}></input>         
    </>
  )
}