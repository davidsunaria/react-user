import React from "react";
import   "./index.css";
import imageSrc from './image2.png';
import SingleEmployee from "./SingleEmployee";
import   SingleEmployeeDetail from "./SingleEmployeeDetail";

function EmployeeList() {
     
    var Employees=[
        {  
             src: imageSrc,
            name:"karan",
            age:"17",
            Profile:"React Developer",
            city:"sirsa"

        },
         {
           src:imageSrc,
            name:"ram",
            age:"18",
            Profile:"Laravel Developer",
            city:"bathinda"
        },
         { 
           src:"./image2.png",
            name:"raman",
            age:"16",
            Profile:"PHP Developer"
        }
     
        ];
          const SelectedData=React.useState({});
        let SelectedEmployee=SelectedData[0];
        let selectfunc= SelectedData[1];

        function callback(data){
            selectfunc(data); // props data comes from singleEmployee by using onClick={callback}
            //and set in selectfunc and then selectfunc update or return that data into SelectedEmployee
        }


         var Newemployee=[];
         for(var i=0; i<Employees.length; i++){
          
             var EmployeesObj= Employees[i];

        var  EmployeeTag= <div className="teacherbox" key={i}> 
             <SingleEmployee data={EmployeesObj} handler={callback}/></div>
              Newemployee.push(EmployeeTag);
             
         }

         return(
                 <div>{Newemployee}
                  <SingleEmployeeDetail select={SelectedEmployee } />                 
                 </div>
                        

         )

}

export default EmployeeList;