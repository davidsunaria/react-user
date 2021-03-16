import React from 'react'
import axios from 'axios';

class Player4 extends React.Component{

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

     callback(ajaxRes) {
      
        for(var i=0; i<ajaxRes.data.length; i++){
         var ajaxResObj= ajaxRes.data[i];
            var ajaxTag = ajaxResObj.name
            var newState={
                    name:ajaxTag
                 }
                 console.log(newState)
                 this.state.user.push(newState)
        }
       
         
         //console.log(this.state)
         this.setState(this.state)
       
     }

     componentDidMount(){
       
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
            this.callback(result)
        })
        
     }

     getPlayerList(){
        var newUser=[];
        for(var i=0;  i<this.state.user.length; i++) {
           var userObj= this.state.user[i];
          var userTag= <p key={i}>{userObj.name}</p>
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

export default Player4;