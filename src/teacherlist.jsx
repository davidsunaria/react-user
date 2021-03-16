import React from "react";
import   "./index.css";
import Teacher from "./teacher";
import Singledata from "./Singledata";
import imageSrc from './image2.png';

function Teacherlist() {
   
    var teachers=[
        {  
             src: imageSrc,
            name:"karan",
            age:"17",
            subject:"english",
            city:"sirsa"

        },
         {
           src:imageSrc,
            name:"ram",
            age:"18",
            subject:"math",
            city:"bathinda"
        },
         { 
           src:"./image2.png",
            name:"raman",
            age:"16",
            subject:"computer"
        }
     
        ];

        const selectedTeacher= React.useState({} );
        let selectedData = selectedTeacher[0];
        const selectfunc= selectedTeacher[1];
        
        function callback(data){
            selectfunc(data);

        }

       

        var newteacher=[];

        for(var i=0; i<teachers.length; i++ ){
       
             var teacherObj= teachers[i];
              var teacherTag= <div className="teacherbox" key={i}  >
                <Teacher  data={teacherObj} onClick={callback}/>
              </div>

              newteacher.push(teacherTag);

        }

      return (
      <div>
        {newteacher}
        <Singledata select={selectedData}/>
      </div>
      )
    
}

export default Teacherlist;