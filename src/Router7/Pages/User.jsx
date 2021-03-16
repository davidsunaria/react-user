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
         value:false
         
     }
     
      componentDidMount(){
       
          axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id).then((ajaxRes)=>{
              this.state.user= ajaxRes.data
              this.setState(this.state)
              console.log(this.state)
          })
      }

      changeData=()=>{
          if(this.state.value==false){
              this.state.value=true
          }
          else{
            this.state.value=false
          }
          this.setState(this.state)
      }

      cancel=()=>{
        if(this.state.value==true){
            this.state.value=false
        }
        else{
          this.state.value=true
        }
        this.setState(this.state)
    }


    render(){
     //console.log(this.props.match.params.id) give id in params it comes from route user component in Userlist file

       if (this.state.value==true){
           let InputData=<div className="ApiUser3">
               <Suspense fallback="Loading....">
                   <Tittle tittleData="Update Detail:" color="white"/>
               </Suspense>
                <img border="2" src={"../profile/img"+(this.props.match.params.id)+".png"} height="150" width="150"/><br/><br/>
                <table cellPadding="0" cellSpacing="0">
                <tr><td align="center"> UserName: </td> <td><input value={this.state.user.name} name="username" className="row2"/> </td></tr><br/>
                <tr><td>  City: </td> <td> <input value={this.state.user.address.city} name="city" className="row2"/></td></tr><br/>
                <tr><td> Street: </td> <td><input value={this.state.user.address.street} name="street" className="row2"/></td></tr><br/>
                <tr><td> Company:</td> <td> <input value={this.state.user.company.name} name="company" className="row2"/></td></tr><br/>
                <tr><td> Phone:</td> <td> <input value={this.state.user.phone} name="phone" className="row2"/></td></tr><br/>
              </table>
               <button>
                  Edit</button>
                  <button onClick={this.changeData}>
                  Cancel</button>
           </div>
           return InputData
       }
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
              <button onClick={this.changeData}>
                  Start</button>
            </div>
        )
    }
}

export default User