import React from  "react"
import axios from 'axios';
class UpdateObj2 extends React.Component{

     state={
          user:[],
          value:true,
          newUser:[],
          removedUser:[],
          newuser2:[],
          btnText:"update"
            
     }
       componentDidMount(){
             axios.get("http://localhost:4000/users").then((result)=>{
                  this.state.user=([...result.data])
                  this.state.newuser2=([...result.data])
                  this.setState(this.state)
                  console.log(this.state.newuser2)
             })
       }

       deleteData(index){
        this.state.removedUser.push(this.state.user[index])
        let deleteItem=  this.state.user.splice(index,1)
        // console.log(deleteItem[0])
          // console.log( this.state.removedUser)
           this.setState(this.state)
       }

       returnData(){
       
            // this.state.removedUser.forEach((singleUser)=>{
            //   this.state.user.push(singleUser)
            // })
            this.state.user.push(...this.state.removedUser)
            this.state.removedUser=[]
            this.setState(this.state)
       }

       OneByOne(){
         if(this.state.removedUser.length!==0){
          let oneObject = this.state.removedUser.pop()
          //console.log(oneObject)
         this.state.user.push(oneObject)
          this.setState(this.state)
         }
         
       }

         
     getData(){
       let  getUser= this.state.user.map((singleUser,i)=>{
            let  UserTag= <div>
              <h2 key={i}>{singleUser.name}  
              <button style={{width:"80px"}} onClick={()=>{
                 this.deleteData(i)
              }}
               >Delete
               </button>
              </h2>
              </div>
             return UserTag
         })
         return getUser
     }

    

     UpdateName=()=>{
        this.state.newUser=[]
         this.state.user.forEach((singleUser,i)=>{
           this.state.newUser.push({...singleUser})
            singleUser.name="update"
         })

         this.setState(this.state)
         console.log(this.state.newUser)
     }

     oldName=()=>{
          this.state.user=[]
          this.state.newuser2.forEach((singleUser,i)=>{
            this.state.user.push({...singleUser})
          })
          console.log(this.state.user)
          
      this.setState(this.state)
  }
  Clickme=()=>{
    if(this.state.value==true){
     this.state.value=false
     this.state.btnText="Update"
     this.UpdateName()
    }
    else{
     this.state.value=true
     this.state.btnText="Previous Value"
     this.oldName()
    }
  //  console.log(this.state.value)
   
    this.setState(this.state)
}



    render(){
        return(
            <div>
                   {this.getData()}
                 <button onClick={this.Clickme}>{this.state.btnText}</button>
                 {/* <button onClick={this.oldName}>old  data</button> */}
                 <button onClick={this.returnData.bind(this)}>Return DeleteData</button>
                 <button onClick={this.OneByOne.bind(this)}>getData OneByOne</button>
            </div>
        )
    }
}

export default UpdateObj2