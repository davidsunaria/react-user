import React, { Profiler } from "react"
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import  {Suspense, lazy} from 'react';
const Tittle  = lazy( ()=> {
    return import('./Tittle');
} )
console.log(Tittle)

class User extends React.Component{
  
     state={
         user:{
              address:{},
              company:{}
         },
         
     }
     
      componentDidMount(){
       
          axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id).then((ajaxRes)=>{
              this.state.user= ajaxRes.data
              this.setState(this.state)
              console.log(this.state)
          })
      }

    render(){
     //console.log(this.props.match.params.id) give id in params it comes from route user component in Userlist file
        return(
            <div style={
                {
                    backgroundColor:"cyan",
                    width:"50%",
                    border:"2px",
                    borderRadius:"50px",
                    paddingTop:"15px",
                    paddingBottom:"15px"
                
            
                }
            }>
               <Suspense fallback="Loading....">
                   <Tittle tittleData="UserDetail is Below:" color="blue"/>
               </Suspense>
              <img border="2" src={"../profile/img"+(this.props.match.params.id)+".png"} height="150" width="150"/>
              <h4 className="row" style={
                  {
                      background:"blue"
                  }
              }>Username: {this.state.user.name}</h4>
              <h4 className="row"> Address: {this.state.user.address.city}</h4>
              <h4 className="row">Street: {this.state.user.address.street}</h4>
              <h4 className="row">Company: {this.state.user.company.name}</h4>
              <h4 className="row">Phone: {this.state.user.phone}</h4>
              <button>
                  Edit</button>
            </div>
        )
    }
}

export default User