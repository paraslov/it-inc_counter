import React, {useState} from 'react'
import './App.css'
import {Counter} from './Components/Counter'
import {Settings} from './Components/Settings';
import {SettingsMenu} from './Components/SettingsMenu';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [settingsActive, setSettingsActive] = useState(true)

    const increaseCounterValue = () => setStartValue(startValue + 1)
    const resetCounterValue = () => setStartValue(0)
    

    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      settingsActive={settingsActive}
                      setMaxValue={setMaxValue}
                      setStartValue={setStartValue}
                      setSettingsActive={setSettingsActive}
                        />
            <Counter startValue={startValue}
                     maxValue={maxValue}
                     increaseCounterValue={increaseCounterValue}
                     resetCounterValue={resetCounterValue}/>
        </div>
    )
}

export default App;
