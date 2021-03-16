import React from 'react';

class CrudApp extends React.Component{

    state={
        user:[],
        currentUser: "raman",
        buttonValue:"Register",
        updateIndex: undefined
    }

    inputValue=(event)=>{
        this.state.currentUser=event.target.value
        this.setState(this.state)
    }

    submitForm= ()=>{
          
        var newUser={
            name:this.state.currentUser
        }

          if(this.state.updateIndex!=undefined){
            this.state.user[this.state.updateIndex].name=this.state.currentUser
          this.state.currentUser=""
          this.state.buttonValue="register"
          this.state.updateIndex=undefined;
          this.setState(this.state)
          }
          else{
            // var newUser={
            //     name:this.state.currentUser we can also used like this
            // }
              this.state.user.push(newUser)
              this.state.currentUser=""
              this.setState(this.state)
          }
         
    }

    deleteData(indexName){
      console.log(indexName)
      let deleteUser= this.state.user.filter((SingleUser,index)=>{
        //console.log(index)
        if(index==indexName){
            return false // false mean that value will not pass
        }
        else{
            return true
        }
      })
      this.state.user=deleteUser
      this.setState(this.state)
    }

    updateData=(indexName)=>{
        //console.log(indexName) selected index
       let updatedUser= this.state.user[indexName].name // selectedUser name
      // console.log(updatedUser)
       this.state.currentUser=updatedUser
     // console.log(this.state.updateIndex) emty and undefined
      this.state.updateIndex=indexName // we assign the value to upadteIndex
    //  console.log(this.state.updateIndex)
       this.state.buttonValue="update"
       this.setState(this.state)
    }

    renderList=()=>{
    
         var renderUser= this.state.user.map((SingleUser,index)=>{
           var UserTag= <h1 key={index}>{SingleUser.name}
           <button className="form-btn" onClick={()=>{
               this.deleteData(index)
           }}>Delete</button>
           <button className="form-btn" onClick={()=>{
               this.updateData(index)
           }}>Update</button>
           </h1>
           return UserTag
         })
         return renderUser
         
    }



    render(){
        return(
            <div>
            <input  name="username" value= {this.state.currentUser} onChange={this.inputValue}/> <br/>
            <button onClick={this.submitForm}>{this.state.buttonValue}</button>
            {this.renderList()}
            </div>

        )
    }


}

export default CrudApp ;