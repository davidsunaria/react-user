
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { WebsiteDeveloper,AndoriodDeveloper,Seo } from './Services';

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
    render(){
  // console.log(this.props.match.params) //why users working we didnt put user below path
    return(
        <BrowserRouter>
        <div>
            <Link to={this.props.match.path+"/1"} className="UserTagRoute">User1</Link><br/>
            <Link to={this.props.match.path+"/2"}  className="UserTagRoute">User2</Link>
            {/* <Route path={this.props.match.path+"/1"} component={User1}/>  */}
            <Route path={this.props.match.path+"/:id"} component={User2}/>
        </div>
        </BrowserRouter>
    )
}
}

export class User1 extends React.Component{
    render(){
    console.log(this.props.match.path) // why Users instead of User1
    return(
        <div>
        <h1>I am a first User</h1>
        <img src="/image2.png" height="200" width="200"/>
        </div>
    )
}
}

export class User2 extends React.Component{
    render(){
        console.log(this.props.match.params)
    return(
        <div>
        <h1>I am a User{this.props.match.params.id}</h1>
        <img src="/image2.png" height="200" width="200"/>
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