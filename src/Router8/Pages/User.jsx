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
              address:{}
         },
         value:false,
         temp:{
              address:{               
              }
              
         }
         
     }
     
      componentDidMount(){
       
          axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id).then((ajaxRes)=>{
              this.state.user= ajaxRes.data
              this.setState(this.state)
              console.log(this.state)
          })
      }

      changeData=()=>{
        this.state.value=true
        this.state.temp.name=this.state.user.name
        this.state.temp.address.city=this.state.user.address.city
        this.state.temp.address.street=this.state.user.address.street
        this.state.temp.phone=this.state.user.phone
        this.setState(this.state)
      }


    Uname=(event)=>{
        
        this.state.temp.name=event.target.value
        this.setState(this.state)
    }

    
    City=(event)=>{
        
        this.state.temp.address.city=event.target.value
        this.setState(this.state)
    }

    Street=(event)=>{
        
        this.state.temp.address.street=event.target.value
        this.setState(this.state)
    }
    Phone=(event)=>{
        
        this.state.temp.phone=event.target.value
        this.setState(this.state)
    }
    EditData=()=>{
       
        this.state.value=false
        this.state.user.name=this.state.temp.name
        this.state.user.address.city=this.state.temp.address.city
        this.state.user.address.street=this.state.temp.address.street
        this.state.user.phone=this.state.temp.phone
        this.setState(this.state)
    }

    cancel=()=>{
        this.state.value=false
        this.setState(this.state)
    }
     
    InputData=()=>{
        
        return(
            <>
            <table cellPadding="0" cellSpacing="0" style={{marginTop:"20px"}}>
            <tr><td align="center"> UserName: </td> <td><input value={this.state.temp.name} name="username" onChange={this.Uname} className="row2"/> </td></tr><br/>
            <tr><td>  City: </td> <td> <input value={this.state.temp.address.city} name="city" onChange={this.City} className="row2"/></td></tr><br/>
            <tr><td> Street: </td> <td><input value={this.state.temp.address.street} name="street" onChange={this.Street}className="row2"/></td></tr><br/>
            <tr><td> Phone:</td> <td> <input value={this.state.temp.phone} name="phone" onChange={this.Phone} className="row2"/></td></tr><br/>
          </table>
           <button onClick={this.EditData}>
              Edit</button>
              <button onClick={this.cancel}>
              Cancel</button>
              </>
        )
    }

    pdata=()=>{

        return(
            <>
            <h4 className="row">Username: {this.state.user.name}</h4>
              <h4 className="row"> Address: {this.state.user.address.city}</h4>
              <h4 className="row">Street: {this.state.user.address.street}</h4>
              <h4 className="row">Phone: {this.state.user.phone}</h4>
              <button onClick={this.changeData}>
                  Start</button>
            </>
        )

    }

    render(){
     let data=null;
     let headerTitle=null
       if (this.state.value==true){
     data= this.InputData()
     headerTitle="Update Detail"
       }
       else{
        data= this.pdata()
        headerTitle="UserDetail is below:"
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
                   <Tittle tittleData={headerTitle} color="blue"/>
               </Suspense>
              <img border="2" src={"../profile/img"+(this.props.match.params.id)+".png"} height="150" width="150"/>
              {data}
            </div>
        )
    }
}

export default User