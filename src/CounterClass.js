import React, { Component } from 'react'

 class CounterClass extends Component {

    constructor(props) {
        super()
        this.state = {
            counter: 0
        }
    }


    render() {
        return (
            <div>
                <h2>ClassCounter</h2> 
                <p> your counter is {this.state.counter}</p>
                <button onClick={()=> this.setState({counter: this.state.counter+1})}>Increment (+1) </button>
            </div>
        )
    }
}

export default CounterClass
