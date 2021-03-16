import React from  "react"
import axios from 'axios';
class UpdateObj extends React.Component{

     state={
          user:[],
          value:true,
          newUser:[],
          removedUser:[]
            
     }
       componentDidMount(){
             axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
                  this.state.user=result.data
                  this.setState(this.state)
             })
       }

       deleteData(index){
        this.state.removedUser.push(this.state.user[index])
        let deleteItem=  this.state.user.splice(index,1)
        // console.log(deleteItem[0])
          
           console.log( this.state.removedUser)
           this.setState(this.state)
       }

       returnData(){
       
            this.state.removedUser.forEach((singleUser)=>{
              this.state.user.push(singleUser)
            })
            this.state.removedUser=[]
            this.setState(this.state)
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
     }

     oldData=()=>{
         this.state.value=true
         this.setState(this.state)
     }


     oldName=()=>{
      this.state.user=[]
         this.state.newUser.forEach((singleUser,i)=>{
           this.state.user.push({...singleUser})
         })
      this.setState(this.state)
  }



    render(){
                //  let data=null;
                //  if(this.state.value==true){
                //      data=this.getData()
                //  }
                //  else{
                //      data=this.oldName()
                //  }

        return(
            <div>
                   {this.getData()}
                 <button onClick={this.UpdateName}>update data</button>
                 <button onClick={this.oldName}>old  data</button>
                 <button onClick={this.returnData.bind(this)}>Return DeleteData</button>
            </div>
        )
    }
}

export default UpdateObj