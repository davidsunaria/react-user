import React from "react"


class Toggle extends React.Component{

    state={
        value: "",
        buttonValue:"show"

    }

    clickme=()=>{
     
        if(this.state.buttonValue=="show"){
            let  newstate={
                value: <h1>loading data...</h1>
            }
            this.state.buttonValue="hide"
            this.state= newstate
            this.setState(this.state)
        }

        else if (this.state.buttonValue=="hide"){
            this.state.buttonValue="show"
            this.state.value=""
             this.setState(this.state)
        }
         

    }


    render(){
        return(
        <div>
            <button onClick={this.clickme.bind(this)}>{this.state.buttonValue}</button><br/>
            {this.state.value}
        </div>)
    }

}

export default Toggle;