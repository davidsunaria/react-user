import React from 'react'
import axios from 'axios'

class ApiAjax extends React.Component{

     state= {
         user:[]
     }

     callback=(ajaxRes)=>{
       
        console.log(ajaxRes.data)

        let newstate={
             user:ajaxRes.data
         }
        //  this.state.user.push(newstate)
         this.setState(newstate)

     }

      componentDidMount(){
          axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
              this.callback(result)
          })
      }

    getUser(){
       let userList= this.state.user.map(function(singleUser,i){
            var userTag= <h1 key={i} className="apiline">{"User"+(i+1)+"=> "+singleUser.address.city}</h1>
             return userTag
 
       })
       return userList
    }
     

      render(){
          return(
              <div>{this.getUser()}</div>
          )
      }

}

export default ApiAjax