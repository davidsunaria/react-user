import React from "react";
import Student from "./student";
import   "./index.css";
function Studentlist(){

   var student=[
   {
   	name:"karan",
   	age:"17",
   	class:"10th"
   },
    {
   	name:"ram",
   	age:"18",
   	class:"11th"
   },
    { 
   	name:"raman",
   	age:"16",
   	class:"9th"
   }

   ];

   var newStudent=[];

    for (var i = 0; i < student.length; i++) {
     var studentObj= student[i]
    var students= <div key={i} className="box">
    <Student name={ studentObj.name } age={ studentObj.age } class={ studentObj.class }/>
    
    </div>
     newStudent.push(students);
    }

return (<div> {newStudent}  </div>)

}

export default Studentlist;