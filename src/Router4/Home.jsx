
import React from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { WebsiteDeveloper,AndoriodDeveloper,Seo } from './Services';
import Singledata from '../Singledata';

export class Home extends React.Component{
    render(){
     return(
         <div>
         <h1> This is  Home Page</h1>
         <img src="/Images/Home.jpg" height="500" width="300"/>
         </div>
     )
 }
 }

export class About extends React.Component{
    render(){
    return(
        <div>
        <h1> This is  About us Page</h1>
        <img src="/Images/About.jpg" height="500" width="300"/>
        </div>
    )
}
}

export class Users extends React.Component{
     state={
         users:[]
     }

     getUsers(ajaxRes){
      // console.log(ajaxRes.data)
       let newstate={
           users:ajaxRes.data
       }
       this.setState(newstate)
      // console.log(this.state)
     }
     
     componentDidMount(){
          axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
             this.getUsers(res)
            
          })
     }

     getLinks(){
        let LinkTag= this.state.users.map((SingleUser,i)=>{
            return <Link className="LinkImg"
                  key={SingleUser.id} 
                  to={this.props.match.path+"/"+SingleUser.id}>
                  <img  border="2" src={"/profile/img"+(i+1)+".png"} width="100" height="100" /><br/>
                  {/* <p>{SingleUser.name}</p> */}
            </Link>
        })
        return LinkTag
      }
    
    render(){
       
    return(
        <BrowserRouter>
        <div>
            <div> {this.getLinks()} </div>
            <Route exact path={this.props.match.path+"/:id/"} component={User}/>
        </div>
        </BrowserRouter>
    )
}
}


export class User extends React.Component{
     
      state={
          teacher:{}
      }

      getTeacher(ajaxRes){
           let newstate={
                teacher:ajaxRes.data
            }
            this.setState(newstate)
            console.log(this.state)
      }
      componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id).then((res)=>{
           this.getTeacher(res)
          
        })
   }

    render(){
        //console.log(this.props.match.params)
    return(
        <div className="ApiUser">

             <h1>User Detail</h1>
         <img border="2" src={"/profile/img"+(this.props.match.params.id)+".png"} height="100" width="100"/> 
        <h4 className="row">Username: {" "+this.state.teacher.name}</h4>
        <h4 className="row"> Address: {" "+this.state.teacher.address}</h4>
        <h4 className="row">Phone: {" "+this.state.teacher.phone}</h4> 
        </div>
    )
}
}

export class Services extends React.Component{
    render(){
    console.log(this.props.match.path)
    return(
        
        <div>
            
            <BrowserRouter>
            <div className="nav">
           <Link to="/WebsiteDeveloper" className="ServiceTag">WebsiteDeveloper</Link> <br/>
           <Link to="/AndoriodDeveloper" className="ServiceTag">AndoriodDeveloper</Link> <br/>
           <Link to="/Seo" className="ServiceTag">SEO</Link>
           </div>
               <Route path="/WebsiteDeveloper" component={WebsiteDeveloper}/>
               <Route path="/AndoriodDeveloper" component={AndoriodDeveloper}/>
               <Route path="/Seo" component={Seo}/>
            </BrowserRouter>
        </div>
    )
}
}