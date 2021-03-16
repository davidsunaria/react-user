import React from "react";

class ClassCalculator extends React.Component{
    
    state={
        value1:0,
        value2:0,
        output:0
    }

    onclick1(){

         let newState={
             value1: this.state.value1 + 1
         }
         this.setState(newState)// setState is function that update the state(object).

    }
    onclick2(){

        let newState={
            value2: this.state.value2 + 1
        }
        this.setState(newState)

   }
   onclick3(){

    let newState={
        value1: this.state.value1 - 1
    }
    this.setState(newState)

}

onclick4(){

    let newState={
        value2: this.state.value2 - 1
    }
    this.setState(newState)

}
onclick5(){

    let newState={
        output: this.state.value2 + this.state.value1
    }
    this.setState(newState)

}




    render(){
        return(
         <div>
              <div className="calculatorSpan">
                  <h1>First Value: {this.state.value1}</h1>
                  <button onClick={this.onclick1.bind(this)}>UP</button>
                  <button onClick={this.onclick3.bind(this)}>Down</button>
              </div>
              <div className="calculatorSpan">
                  <h1> Second Value: {this.state.value2}</h1>
                  <button onClick={this.onclick2.bind(this)}>First value</button>
                  <button onClick={this.onclick4.bind(this)}>Down</button>
              </div>
              <div className="calculatorSpan">
                  <h1>Result: {this.state.output}</h1>
                  <button onClick={this.onclick5.bind(this)}>Sum</button>
              </div>
        </div>
        
        )
    }
}

export default ClassCalculator;