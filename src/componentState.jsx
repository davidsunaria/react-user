import React from 'react';

function Counter(){
    console.log("component loaded")
    const clicked = React.useState(1);

    let clickedValue = clicked[0];
    console.log('clickedValue on load', clickedValue)
    const setClickedFunc = clicked[1];
    

    function onClickHandler() {
       
        clickedValue = clickedValue + 1;
        setClickedFunc(  clickedValue ); // is this function using for print value on screen why we need 
                     //answer is NO it only set value and return to that value in array index[0] or clicked value
        console.log("ok")                      
    }
    return (
        <h1 onClick={onClickHandler}>Clicked: {clickedValue} </h1>
    )
}

export default Counter;