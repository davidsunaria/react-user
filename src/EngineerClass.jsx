import React from "react"

class EngineerClass extends React.Component{
 state= {
   value:"default value",
   value2:"value2"
 }
 onclick(){
  let newState={
    value:"New value"
  }
   this.setState(newState)

 }

 onclick2(){
   let newState={
     value2:"second value updated"
   }
   this.setState(newState)
 }
render(){

      return(
      <div>
        <h1 onClick={this.onclick.bind(this)}>I am class component of EngineerClass: {this.state.value}</h1>
        <h1 onClick={this.onclick2.bind(this)}>I am second value: {this.state.value2}</h1>
      </div>
      )
}

}

export default EngineerClass;