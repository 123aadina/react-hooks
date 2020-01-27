import React, {useState} from 'react'

export default function CounterHook() {

    const[counter, setCounter]= useState(0)
    return (
        <div>
            <h2>HookCounter</h2>
            <p>your counter is {counter}</p>
            <button onClick={ ()=> setCounter(counter+1)}>Increment (+1</button>


        </div>
    )
}
