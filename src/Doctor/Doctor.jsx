import React from "react"

class Doctor extends React.Component{
  
     DoctorList= [
                   {
                       name:"karan",
                       age:50
                   },
                   {
                    name:"Raman",
                    age:45
                   }
               ];
           
               NewDoctor =[];
 
             demo() {

                for (var i=0; i<this.DoctorList.length; i++) {
                
                   let DoctorObj= this.DoctorList[i];
                   let DoctorTag=<div>
                        <h1>name:{DoctorObj.name}</h1>
                        <h3>age:{DoctorObj.age}</h3>
                    </div>

                    this.NewDoctor.push(DoctorTag)
                }     
                   
               }

    render(){
 
        this.demo()

        return(
              <div> {this.NewDoctor}  </div>
        )
    }

}

export default Doctor;