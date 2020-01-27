import React, { useState, useEffect } from 'react'

export default function CounterHookLifecycle() {

    const [counter, setCounter] = useState(0)

    

    useEffect(() => {
        document.title = `you clicked ${counter} times`

    }, [counter])

    return (
        <div>
            <h2>CounterHookLifecycle</h2>
            <p> your counter is {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment (+1) </button>
        </div>
    )
}
