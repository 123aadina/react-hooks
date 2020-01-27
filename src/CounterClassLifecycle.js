import React, { Component } from 'react'

 class CounterClassLifecycle extends Component {

    constructor(props) {
        super()
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        document.title = `Component init`
    }

    componentDidUpdate() {
        document.title = `you clicked ${this.state.counter}
         times`
    }

    render() {
        return (
            <div>
                <h2>CounterClassLifecycle</h2> 
                <p> your counter is {this.state.counter}</p>
                <button onClick={()=> this.setState({counter: this.state.counter+1})}>Increment (+1) </button>
            </div>
        )
    }
}

export default CounterClassLifecycle