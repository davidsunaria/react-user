import React,{useState} from "react"


function Engineer(){
  
  let [value,setvalue]= useState("default value");

  function onclick(){
     
     setvalue("New Value")

  }

  let [value2,setvalue2]= useState("default value2");

  function onclick2(){
     
     setvalue2(" Value2 updated")

  }
    return(
    <div>
      <h1 onClick={onclick}>I am an Engineer: {value}</h1>
      <h1 onClick={onclick2}>I am second value: {value2}</h1>
      </div>
    )
}

export default Engineer;