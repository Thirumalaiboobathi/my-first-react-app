import React from "react";



export function Myfunction(){

    const [state,setState] = React.useState({value : 0});

    const increment = () =>{
        setState({...state,value: state.value+1});

    }

    return <div>

        <h1>Value:<b>{state.value}</b></h1>
        <button onClick={increment}>Increment</button>
    </div>

    


}