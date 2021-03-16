import React from "react";

function SingleDeveloper(props){
 
    function DeveloperData(){
        console.log(props.data)
        props.onclick(props.data)
    }

    return(
      <div className="teacherbox" onClick={DeveloperData}>  
        <img src={props.data.image} className="teacher-img"/><br/>
        <h1>Name: {props.data.name}</h1>
        <h3>Profie: {props.data.profile}</h3>
        <h3>Salary: {props.data.salary}</h3>
    </div>  

    )
}
export default SingleDeveloper;