import React from 'react';
import logo from './logo.svg';
import CounterClass from "./CounterClass"
import CounterHook from "./CounterHook" 
import CounterClassLifecycle from "./CounterClassLifecycle"
import CounterHookLifecycle from "./CounterHookLifecycle"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass/>
        <CounterHook/>
        <CounterClassLifecycle/>
        <CounterHookLifecycle/>
       
      </header>
    </div>
  );
}

export default App;
