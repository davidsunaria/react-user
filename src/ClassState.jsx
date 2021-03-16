import React from "react"

class ClassState extends React.Component{

     state={
         count:0
     }

     abc(){
        console.log(this)
        

     }

  render(){

    return(

     <div onClick={this.abc}>
         <h1>Count is: {this.state.count}</h1>
    </div>

    )
  }

} 

export default ClassState;