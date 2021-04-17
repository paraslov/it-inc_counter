import React, {useState} from 'react'
import './App.css'
import {Counter} from './Components/Counter'
import {Settings} from './Components/Settings';

function App() {
    const [value, setValue] = useState(0)
    const increaseCounterValue = () => setValue(value + 1)
    const resetCounterValue = () => setValue(0)

    return (
        <div className="App">
            <Settings value={2} maxValue={5}/>
            <Counter value={value}
                     maxValue={5}
                     increaseCounterValue={increaseCounterValue}
                     resetCounterValue={resetCounterValue}/>
        </div>
    )
}

export default App;
