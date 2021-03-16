import React from 'react'

class Player extends React.Component{

     state={
         user: [
             {
               name:"raman"
             },

             {
                name:"karan"
              }
        ]
     }

     componentDidMount(){
      
     let newState=
        
          {
            name:"david"
          }
        
      
       this.state.user.push(newState)
       console.log(this.state)
        this.setState(this.state)
     }

     getPlayerList(){
        var newUser=[];
        for(var i=0;  i<this.state.user.length; i++) {
           var userObj= this.state.user[i];
          var userTag= <p  key={i}>{userObj.name}</p>
          newUser.push(userTag);
        }
        return newUser
      }



    render(){
      
     
        return(
         
          <div>
            {this.getPlayerList() }
          </div>

        )
    }



}

export default Player;