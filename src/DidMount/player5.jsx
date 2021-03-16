import React from 'react'
import axios from 'axios';
import imageSrc from './image2.png';

class Player5 extends React.Component{

     state={
         user: [
        ]
     }

     callback(ajaxRes) {
         let newState={
            user:ajaxRes.data
        }
        this.setState(newState)
       // console.log(ajaxRes)
        //console.log(this)
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
          var userTag=<div key={i}>
               <img src="./image2.png"/>
               <p>{userObj.name}</p>
                </div>
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

export default Player5;