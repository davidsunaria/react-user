import React from 'react'

class ImageLoader extends React.Component{
    state={
        count:1,
        value:false
        
    }

    clickme=()=>{
        if(this.state.value==true){
            this.state.value=false
            this.state.count=this.state.count+1
            if( this.state.count>5){
                this.state.count=1
             }
        }
        else{
            this.state.value=true
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
            let ImgTag=null
            if(this.state.value==true){
                
                ImgTag= <div className="loaderImage"><h3>{"Image No:"+this.state.count}</h3>
                    <img src={"/Images/image"+this.state.count+".jpg"} height="530" width="500"/>
                    </div>
                
            }


       return(
           <div>
            <center> 
           <button onClick={this.clickme}>{this.buttonText()}</button>
           {ImgTag}
           </center>  
           </div>
       )
   }

}

export default ImageLoader