import React from "react";
import   "./index.css";

function SingleEmployee(props) {
    
    if (props.data.city!=undefined) {
     var PObj=  <p> City: {props.data.city}</p>
    }

    function singleEmployee(){
        props.handler(props.data) // onclick function calling and props.data is its parameter
    }

    return(
           <div onClick={singleEmployee}>
            <img src={props.data.src} alt="error" className="teacher-img"/> <br/>
            <h1> Name: {props.data.name} </h1>
            <h3> Profile: {props.data.Profile} </h3>
            <h3>  Age: {props.data.age}</h3>
                {PObj}
         
           </div>

    )
    
}

export default SingleEmployee;