import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home,About,Services,Users } from './Home';
 import CrudApp from '../CrudUserForm/CrudApp' //   (../ for exist from folder)


function Router4(){


    return(
        <div>
        <BrowserRouter>
        <center>
        <div className="nav">
           <Link to="/" className="LinkTag">Home</Link>
           <Link to="/About" className="LinkTag">About</Link>
           <Link to="/Teacher" className="LinkTag">Users</Link>
           <Link to="/Services" className="LinkTag">Services</Link>
           <Link to="/CrudApp" className="LinkTag">SignUp</Link> 
           
         </div>
           <Route path="/" exact component={Home}/>
           <Route path="/About" component={About}/>
           <Route path="/Teacher" component={Users}/>
           <Route path="/Services" component={Services}/>
            <Route path="/CrudApp" component={CrudApp}/> 
           </center>
        </BrowserRouter>
        </div>
    )
        
    
}

export default Router4