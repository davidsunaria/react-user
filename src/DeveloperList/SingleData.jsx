import React from "react";


function SingleData(props){

      return(
          <div className="teacherbox2">
        <h1> Developer Detail</h1>
        <img src={props.select.image} className="teacher-img"/><br/>
        <h1>Name: {props.select.name}</h1>
        <h3>City: {props.select.City}</h3>
        <h3>Mobile: {props.select.Mobile}</h3>
          </div>
      )


}

export default SingleData;