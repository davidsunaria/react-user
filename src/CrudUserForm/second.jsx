import React from 'react';

class Demo extends React.Component{

     state={
         user:[],
         currentUser:""
     };

     updateInputValue(event){
       this.state.currentUser= event.target.value; //event is by default pass and it target that value of input which trigger
       this.setState(this.state);

     }

     submitForm(){
         let newUser={
             name: this.state.currentUser
         }
         this.state.user.push(newUser)
         this.state.currentUser = "";
       // console.log(this.state)
         this.setState(this.state);
     }

     deleteData(indexName){
        // console.log(indexName)
         
        //console.log(this.state.user[indexName])
      let deleteUser= this.state.user.filter((SingleUser,index)=>{
           if(index==indexName){
               return false // it mean it will not pass that entry(index) of array beacause of false
           }
           else{
               return true // return deleteUser if true
           }
        })

       // console.log(deleteUser)

        this.state.user=deleteUser


        //this.state.user[indexName]={}
        console.log(this.state)
        this.setState(this.state);
        
     }
     
     renderList(){
         let userList= this.state.user.map((SingleUser, index)=>{
             var UserTag= <h1 key={index}>{SingleUser.name}<button className="form-btn" onClick={()=>{
                // console.log(index)
                 this.deleteData(index)
             }}
             >Del</button> 
             <button className="form-btn">Edit</button></h1>;
             //console.log(index);
             return UserTag;
         })
         return userList;
     }


    render(){

        return(
            <div>
            <input type="text" value={this.state.currentUser} name="username" onChange={this.updateInputValue.bind(this)}/ > <br/>
            <button onClick={this.submitForm.bind(this)}>register</button>
            {this.renderList()}
            </div>
        )
    }


}

export default Demo;