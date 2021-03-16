import React from 'react'
import axios from 'axios';

class Player6 extends React.Component{
    state={
        user: [
            {
              id: 11,
              name:"raman"
            },

            {
              id: 12,
               name:"karan"
             }
       ]
    }

    callback(ajaxRes){
      let newState = this.state;
      newState.user = [
        ...this.state.user,
        ...ajaxRes.data
      ]
      console.log(newState);
      this.setState(newState);
    }

   

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
        this.callback(result)
      })
    }

    getPlayerList(){

     let newarray=   this.state.user.map(function(singleItem){
          var userTag= <p key={singleItem.id}>{singleItem.name}</p>
        // console.log(singleItem.name)
          return (userTag) // its like pushing
          
        });
        return newarray;
    }

    updateInput(){
        

    }


render(){

  return(
    <div>
        {/* <input type="text" onChange={updateInput} name="username"/><br/>
        <input type="button" value="register" name="submitbtn"/>  */}
    {this.getPlayerList()}
  </div>
  )
}
  
}

export default Player6;