import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';
console.log("about page load")
class About extends React.Component{



    render(){
        console.log(this.props)
        return(
            <div>
            <h1>{this.props.header}</h1>
            <img src="/Images/seo.gif" height="500" width="900"/>
            </div>
        )
    }
}

export default About