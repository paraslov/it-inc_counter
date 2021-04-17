import React, {ChangeEvent, useState} from 'react'
import './App.css'
import {Counter} from './Components/Counter'
import {Settings} from './Components/Settings';
import {SettingsMenu} from './Components/SettingsMenu';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counterValue, setCounterValue] = useState(startValue)
    const [settingsActive, setSettingsActive] = useState(false)

    const increaseCounterValue = () => setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)

    const onMaxValueChange = (newMaxValue: number) => {
        setSettingsActive(true)
        setMaxValue(newMaxValue)
    }
    const onStartValueChange = (newStartValue: number) => {
        setSettingsActive(true)
        setStartValue(newStartValue)
    }
    const onSetButtonClick = () => {
        setCounterValue(startValue)
        setSettingsActive(false)
    }


    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      settingsActive={settingsActive}
                      onMaxValueChange={onMaxValueChange}
                      onStartValueChange={onStartValueChange}
                      onSetButtonClick={onSetButtonClick}
                        />
            <Counter counterValue={counterValue}
                     maxValue={maxValue}
                     settingsActive={settingsActive}
                     increaseCounterValue={increaseCounterValue}
                     resetCounterValue={resetCounterValue}/>
        </div>
    )
}

export default App;
