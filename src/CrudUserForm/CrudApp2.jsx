import React from 'react'

class CrudApp2 extends React.Component{

    state={
        user:[],
        currentUser: "Developer Name",
        updateIndex:undefined
    }

   inputValue=(event)=>{
      // console.log(event.target.value)

       this.state.currentUser =event.target.value
       this.setState(this.state)
   }

   submitValue=()=>{
       let newUser={
           name: this.state.currentUser
       }

       if(this.state.updateIndex!=undefined){
        this.state.user[this.state.updateIndex].name=this.state.currentUser // beacuse of object we used .name to assign value
        this.state.currentUser=""
        this.state.updateIndex=undefined
        this.setState(this.state)
       }
       else{
        this.state.user.push(newUser)
        this.state.currentUser=""
        this.setState(this.state)
       }
       
   }

   deleteData=(indexName)=>{
    //    console.log(indexName)
   let deleteUser= this.state.user.filter((SingleUser,index)=>{
       if (index==indexName){
           return false
       }
       else{
          return true
       }
    })
     this.state.user=deleteUser
    this.setState(this.state)
   }
  

   UpdateData(indexName){
      
    this.state.updateIndex=indexName
      let updateUser=this.state.user[indexName].name
      // console.log( updateUser)
       console.log( this.state.updateIndex)
       this.state.currentUser=updateUser
       this.state.updateIndex=indexName
       this.setState(this.state)
   }
  
   buttonTxt(){
       if(this.state.updateIndex!=undefined){
           return "Update"
       }
       else{
        return "Register"
       }
   }

   

  

   renderlist(){

       let userList= this.state.user.map((SingleUser,index)=>{
           let  userTag  = 
           <div>
              <h1 key={index}>{SingleUser.name}
               <button className="form-btn" onClick={()=>{
                   this.deleteData(index)
               }}>
                   Delete
                  </button>
                  <button  className="form-btn" onClick={()=>{
                   this.UpdateData(index)
               }}>
                   Update
                  </button>
                </h1>
           </div>
           return userTag
        })
         return userList
   }




    render(){
        return(
            <div>
                <input  name="username" value={this.state.currentUser} onChange={this.inputValue}/> <br/>
                <button onClick={this.submitValue}>{this.buttonTxt()}</button>
                 {this.renderlist()}
            </div>
        )
    }
}

export default CrudApp2