import React from "react";
//import Singledata from "./Singledata";
import imageSrc from './image2.png';


function Teacher(props){

    console.log(props);
function singledata(){
 props.onClick(props.data)
}

    let cityObj= "";
    if(props.data.city!=undefined){
      cityObj= <p>city: {props.data.city} </p>

    }
      return(
     
         <div onClick={singledata} className="singledata">
          <img src={props.data.src} alt="error" className="teacher-img"/> <br/>   
          <h1>Name: {props.data.name} </h1>
          <h3>Age: {props.data.age} </h3>
          <h3>Subject: {props.data.subject} </h3>
           {cityObj}
         </div>
      )

}

export default Teacher;