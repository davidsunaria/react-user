import { BrowserRouter, Route, Link } from 'react-router-dom'
import React from "react"
import axios from 'axios'
import User from "./User"
import UserList from './UserList'

class UserDetail extends React.Component{

    


    render(){
       
        return(
            <div>
                 <Route  path={this.props.match.path} exact  component={UserList}></Route>
               {/* <Route  path="/Teacher" exact  component={UserList}></Route>  */ } 
               {/* first and commentend second route is same */}
               
               <Route  path={this.props.match.path+"/:id"} component={User}></Route> 
            </div>
        )
    }
}

export default UserDetail