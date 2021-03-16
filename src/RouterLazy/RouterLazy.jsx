import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import  Home from './Pages/Home';
import  Services from './Pages/Services';
import UserDetail from "./Pages/UserDetail";
const About=lazy(()=>{
   return import('./Pages/About')
})


class RouterLazy extends React.Component{


    render(){
        return(
           <BrowserRouter>
           <center>
                  <Link className="LinkTag" to ="/">Home</Link>
                  <Link className="LinkTag" to="/about">About</Link>
                  <Link className="LinkTag" to="/service">Services</Link>
                  <Link className="LinkTag" to="/Teacher">UserList</Link>
                  <Route exact path="/"  component={Home}/>  
                  <Route exact path="/about"  render={(props)=>{
                      return <Suspense fallback="loading">
                      <About header="About Us Page"/>
                  </Suspense>
                  }}>
                  </Route>
                  <Route exact path="/service" header="Services Page" component={Services}/> 
                  <Route  path="/Teacher" render/>
                
             </center>
           </BrowserRouter>
        )
    }


}

export default RouterLazy