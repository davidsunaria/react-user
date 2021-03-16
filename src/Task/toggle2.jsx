import React from "react"


class Toggle2 extends React.Component{

     state={
         value:false,
         count:0
         
     }

     clickme=()=>{
         if(this.state.value==false){
             this.state.value=true
             this.state.count=this.state.count+1
             if( this.state.count>5){
                this.state.count=0
             }
            
         }
         else{
            this.state.value=false
         }
         this.setState(this.state)
     }

     buttonText(){
         if(this.state.value==true){
             return  "Hide"
         }
         else{
             return "Show"
         }
     }
     


    render(){
      
         let data=null
         if(this.state.value==true){
          data=<h1>loading data {this.state.count}</h1>
         }
        
        return(
        <div>
            <button onClick={this.clickme}>{this.buttonText()}</button><br/>
            {data}
            
        </div>)
    


}
}

export default Toggle2;