import React from 'react'

class ImageLoader3 extends React.Component{
    state={
        count:1,
        
    }

    clickme=()=>{
       
            this.state.count=this.state.count+1
            if( this.state.count>5){
                this.state.count=1
             }
        
        
        this.setState(this.state)
    }

   
    


   render(){
           

       return(
           <div>
            <center> 
           <div className="loaderImage" onClick={this.clickme}><h3>{"Image No:"+this.state.count}</h3>
                    <img src={"/Images/image"+this.state.count+".jpg"} height="530" width="500"/>
                    </div>
           </center>  
           </div>
       )
   }

}

export default ImageLoader3