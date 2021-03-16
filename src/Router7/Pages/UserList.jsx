import { BrowserRouter, Route, Link } from 'react-router-dom'
import React from "react"
import axios from 'axios'
import User from "./User"
import UserDetail from "./UserDetail"

class UserList extends React.Component{

     
    state={
        user:[]
    }

    componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
           this.state.user=result.data
           this.setState(this.state)
          // console.log(this.state)
       })
    }

    getLinks(){

       // console.log(this.props.match.path) // give teacher from parent component in props
      // console.log(this.props.match.params) params is empty here
       let getUser=this.state.user.map((SingleUser,i)=>{
          let LinkTag=  <Link className="LinkImg" to={this.props.match.path+"/"+SingleUser.id} key={i}>
              <img src={"/profile/img"+(i+1)+".png"} width="100" height="100" border="2"/>
              </Link>
          return LinkTag
        })
        return getUser
    }

    render(){
        console.log(this.props.match.path)
        return(
            <div>
            {this.getLinks()} <br/>
            
            </div>
            
            // {/* SingleUser.id in link tag save in :id after / any data save in :id and make url */}
        )
    }
    
}

export default UserList