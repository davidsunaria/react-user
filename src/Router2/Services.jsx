
import React from 'react';
export class WebsiteDeveloper extends React.Component{

render(){
  
    return(
      <div>
         <h1> We Develop the Website For Our Clients</h1>
         <img src="/Images/web.gif" height="300" width="500"/>
      </div>

    )
}
}

export class AndoriodDeveloper extends React.Component{

    render(){
        return(
          <div>
             <h1> We Develop the Andoriod Application For Our Clients</h1>
             <img src="/Images/mobile.gif" height="300" width="500"/>
          </div>
    
        )
    }
    }

    export class Seo extends React.Component{

        render(){
            return(
              <div>
                 <h1> We also give the SEO Service For Our Clients</h1>
                 <img src="/Images/seo.gif" height="300" width="500"/>
              </div>
        
            )
        }
        }