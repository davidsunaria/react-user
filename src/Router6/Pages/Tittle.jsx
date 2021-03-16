import React from "react"


class Tittle extends React.Component{



    render(){

        return(
            <div>
                <h1 
                  style={{
                      color:this.props.color
                  }}
                > {this.props.tittleData}</h1>
                </div>
        )
    }
}

Tittle.defaultProps={

    color:"red"
}

export default Tittle