
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { WebsiteDeveloper,AndoriodDeveloper,Seo } from './Services';

export function Home(){

    return(
        <div>
        <h1> This is  Home Page</h1>
        <img src="/Images/Home.jpg" height="500" width="300"/>
        </div>
    )
}

export function About(){

    return(
        <div>
        <h1> This is  About us Page</h1>
        <img src="/Images/About.jpg" height="500" width="300"/>
        </div>
    )
}

export function Users(props){
   console.log(props.match.path) //why users working we didnt put user below path
    return(
        <BrowserRouter>
        <div>
            <Link to={props.match.path+"/1"} className="UserTagRoute">User1</Link><br/>
            <Link to={props.match.path+"/2"}  className="UserTagRoute">User2</Link>
            <Route path={props.match.path+"/1"} component={User1}/> 
            <Route path={props.match.path+"/2"} component={User2}/>
        </div>
        </BrowserRouter>
    )
}

export function User1(props){
   // console.log(props.match.path) // why Users instead of User1
    return(
        <div>
        <h1>I am a first User</h1>
        <img src="/image2.png" height="200" width="200"/>
        </div>
    )
}

export function User2(){
    return(
        <div>
        <h1>I am a Second User</h1>
        <img src="/image2.png" height="200" width="200"/>
        </div>
    )
}

export function Services(props){
    //console.log(props.match.path)
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