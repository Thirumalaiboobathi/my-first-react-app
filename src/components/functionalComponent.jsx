import React from "react";

export function Myfunction(){

    const [state,setState] = React.useState({value : 1});

    const increment = () =>{
        setState({...state,value: state.value+1});
    }
    const decrement = () =>{
        setState({...state,value: state.value-1});
    }
    const Multiply = () =>{
        setState({...state,value: state.value*2});
    }
    const Division = () =>{
        setState({...state,value: state.value/2});
    }
    

    return <div>

        <h1>Value:<b>{state.value}</b></h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Increment</button>
        <button onClick={Multiply}>Increment</button>
        try {
             <button onClick={Division}>Increment</button>
        } catch (error) {
            <h1>Zero Division Error Occured Increment The value Greater Than One</h1>
            
        }
        
    </div>

    


}