import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import  Home from './Pages/Home';
import UserDetail from "./Pages/UserDetail";


class Router6 extends React.Component{


    render(){
        return(
           <BrowserRouter>
           <center>
                  <Link className="LinkTag" to ="/">Home</Link>
                  <Link className="LinkTag" to="/Teacher">UserList</Link>
                  <Route exact path="/" component={Home}/> <br/><br/>
                  <Route  path="/Teacher" component={UserDetail}/>
                
             </center>
           </BrowserRouter>
        )
    }


}

export default Router6