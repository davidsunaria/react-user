import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends React.Component{



    render(){
        return(
            <div>
            <h1>This is Home Page</h1>
            <img src="/Images/web.gif" height="500" width="900"/>
            </div>
        )
    }
}

export default Home