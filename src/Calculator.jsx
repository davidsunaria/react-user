import React,{useState} from "react"


function Calculator(){

      let [value1,setfunc1]=useState(0)
      function onClick1(){
          value1=value1 + 1
         setfunc1(value1)
      }

      let [value2,setfunc2]=useState(0)
      function onClick2(){
          value2=value2 + 1
         setfunc2(value2)
      }
     
      let[output,setfunc3]=useState(0)
      function onClick3(){
          output=value2 + value1
         setfunc3(output)
      }

      function onClick4(){
          value1=value1 - 1
         setfunc1(value1)
      }
      function onClick5(){
        value2=value2 - 1
       setfunc2(value2)
    }

return(

     <div>
         <div className="calculatorSpan">
             <h1>First Value: {value1}</h1>
             <button onClick={onClick1}>UP</button>
             <button onClick={onClick4}>Down</button>
         </div>
         <div className="calculatorSpan">
             <h1>Second Value: {value2}</h1>
             <button onClick={onClick2}>UP</button>
             <button onClick={onClick5}>Down</button>
         </div>
         <div className="calculatorSpan">
             <h1>Sum: {output}</h1>
             <button onClick={onClick3}>Result</button>
         </div>
         
     </div>


)

}

export default Calculator;