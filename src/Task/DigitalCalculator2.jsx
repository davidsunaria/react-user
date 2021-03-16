import React from 'react'

class DigitalCalculator2 extends React.Component{
   
    state={
        one:null,
        two:null,
        three:null,
        currentValue:null,
        value: 0
    }
   
     one=()=>{
         this.state.one=1

         this.setState(this.state)
     }

     two=()=>{
        this.state.two=2
        this.setState(this.state)
    }

    three=()=>{
        this.state.three=3
        this.setState(this.state)
    }
    // sum=()=>{
    //     this.state.three=3
    //     this.setState(this.state)
    // }

  getvalueFromButton( val ){
     this.state.value =  this.state.value + val;
     this.setState(this.state)
  }


    render(){
        return(
            <div>
                <table className="calculatortable" border="2"  align="center">
                    <tr>
                        <td colSpan="3">
                           <div>
                            {this.state.value}
                           </div>
                        </td>
                    </tr>
                    <tr>
                        <td onClick={ ()=>{
                            this.getvalueFromButton("1");
                        } }><button className="calculatorbutton">1</button></td>
                        <td onClick={ ()=>{
                            this.getvalueFromButton("2");
                        } }><button className="calculatorbutton">2</button></td>
                        <td onClick={
                             ()=>{
                                this.getvalueFromButton("3");
                            } 
                        }><button className="calculatorbutton">3</button></td>
                    </tr>
                    <tr>
                        <td><button className="calculatorbutton">4</button></td>
                        <td><button className="calculatorbutton">5</button></td>
                        <td><button className="calculatorbutton">6</button></td>
                    </tr>
                    <tr>
                        <td><button className="calculatorbutton">7</button></td>
                        <td><button className="calculatorbutton">8</button></td>
                        <td><button className="calculatorbutton">9</button></td>
                    </tr>
                    <tr>
                        <td><button className="calculatorbutton">0</button></td>
                        <td onClick={()=>{
                            this.getvalueFromButton("+");
                        } }><button className="calculatorbutton">+</button></td>
                        <td><button className="calculatorbutton">-</button></td>
                    </tr>
                    <tr>
                        <td><button className="calculatorbutton">x</button></td>
                        <td><button className="calculatorbutton">%</button></td>
                        <td><button className="calculatorbutton">Del</button></td>
                    </tr>
                </table>
            </div>
        )
    }



}

export default DigitalCalculator2