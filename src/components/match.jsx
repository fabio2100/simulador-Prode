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
  const isReadOnly = props.isReadOnly;
  var resultado = props.resultado; 
  const [selectElegido,setSelectElegido] = useState();
  const [elegido,setElegido] = useState([]);

  const onChangeRadio1 = function(event){
    console.log(`onchagen1`)
  }
  const onChangeRadio2 = function(event){
  }
  const onChangeRadio3 = function(event){
  }

  const onChangeRadio = ({target}) => {
    console.log('onchagen1')
    console.log({target})
    setElegido(target.value)

  }
  return (  
    <> 
    <div name={selectElegido} onChange={onChangeRadio}>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio}  disabled={isReadOnly ? true : false} checked={resultado===1 || elegido === 1}></input>
        <input type="radio" className='radioButton' name={props.name} onChange={onChangeRadio}  disabled={isReadOnly ? true : false} checked={resultado===2 || elegido === 2}></input>
        <input type="radio" className='radioButton' name={props.name}  onChange={onChangeRadio} disabled={isReadOnly ? true : false} checked={resultado===3 || elegido === 3}></input>         
        </div>
    </>
  )
}