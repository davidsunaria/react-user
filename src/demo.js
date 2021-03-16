
import React from "react";

function User2(props){
  
  var name =["ram","karan","ramanu"];
     var  username=["prince"];
       for(var i=0; i<name.length; i++){
        var nameObj = name[i];
        var client= <h1 key={i}>{nameObj}{props.roll}</h1>
        username.push(client);

       }
return(
	<div> <h1>{username}</h1>
	 </div>
	
	)
}

export default User2;
