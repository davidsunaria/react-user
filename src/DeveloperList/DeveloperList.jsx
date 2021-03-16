import React, { useState } from "react";
import SingleDeveloper from "./SingleDeveloper";
import SingleData from "./SingleData";

function DeveloperList(){

     var developers=[
         
        {
        image: "./image2.png",  
        name:"Karan",
        profile:"React Developer",
        salary:100000,
        Mobile:"9455685562",
        City:"Dabwali"
       },
          
       {
         image: "./image2.png",   
        name:"Raman",
        profile:"PHP Developer",
        salary:50000,
        Mobile:"9405005562",
        City:"Sirsa"
       },

       {
         image: "./image2.png",  
        name:"Sham",
        profile:"Angular Developer",
        salary:85000,
        Mobile:"9405115562",
        City:"Bathinda"
       }

    ];

    let SingleDetail= React.useState({});
    let singleData=SingleDetail[0];
    let UpdateFunc=SingleDetail[1];

    function callback(data) {
       UpdateFunc(data)
    }

    var newDeveloper=[];

    for(var i=0; i<developers.length; i++){
      var developerObj=developers[i];
      var developerTag=<SingleDeveloper data={developerObj} onclick={callback}/>
       newDeveloper.push(developerTag);

    }

          return(
             
           <div> 
              {newDeveloper}
              <SingleData select={singleData}/>
            </div>
          )

}

export default DeveloperList;