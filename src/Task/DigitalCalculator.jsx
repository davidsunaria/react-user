import React from 'react'

class DigitalCalculator extends React.Component{
   
    state={
        one:null,
        two:null,
        three:null,
        currentValue:null
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




    render(){
        return(
            <div>
                <table className="calculatortable" border="2"  align="center">
                    <tr>
                        <td colSpan="3">
                           <div>
                            {this.state.one}
                            {this.state.two}
                            {this.state.three}
                           </div>
                        </td>
                    </tr>
                    <tr>
                        <td onClick={this.one}><button className="calculatorbutton">1</button></td>
                        <td onClick={this.two}><button className="calculatorbutton">2</button></td>
                        <td onClick={this.three}><button className="calculatorbutton">3</button></td>
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
                        <td onClick={this.sum}><button className="calculatorbutton">+</button></td>
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

export default DigitalCalculator