import React from "react";
import   "./index.css";

function SingleEmployeeDetail(props){
    console.log(props)
    if (props.select.city!=undefined) {
        var PObj=  <p> City: {props.select.city}</p>
    }
    return(

         <div className="teacherbox2">
             <h1>Single Employee Detail</h1>
              <h2>Name: {props.select.name} </h2>
              <h2>Profile: {props.select.Profile} </h2>
              {PObj}
         </div>


    )
}

export default  SingleEmployeeDetail;