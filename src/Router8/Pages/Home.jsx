import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import  {Suspense, lazy} from 'react';
const Tittle  = lazy( ()=> {
    return import('./Tittle');
} )

class Home extends React.Component{



    render(){
        return(
            <div>
           <Suspense fallback="Loading....">
                   <Tittle tittleData="This is Home Page"/>
               </Suspense>
            <img src="/Images/web.gif" height="500" width="900"/>
            </div>
        )
    }
}

export default Home