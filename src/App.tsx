import React, {useEffect, useState} from 'react'
import './App.css'
import {Counter} from './Components/Counter'
import {MemoSettings} from './Components/Settings'

function App() {
    useEffect(() => {
        let counterSettings = localStorage.getItem('counterSettings')
        if (counterSettings) {
            let values = JSON.parse(counterSettings)
            setStartValue(values.startValue)
            setCounterValue(values.startValue)
            setMaxValue(values.maxValue)
        }
    }, [])

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counterValue, setCounterValue] = useState(startValue)
    const [settingsActive, setSettingsActive] = useState(false)

    const increaseCounterValue = () => setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)

    const onMaxValueChange = (newMaxValue: number) => {
        setCounterValue(0)
        setSettingsActive(true)
        setMaxValue(newMaxValue)
    }
    const onStartValueChange = (newStartValue: number) => {
        setSettingsActive(true)
        setStartValue(newStartValue)
    }
    const onSetButtonClick = () => {
        localStorage.setItem('counterSettings', JSON.stringify({startValue: startValue, maxValue: maxValue}))
        setCounterValue(startValue)
        setSettingsActive(false)
    }

    return (
        <div className="App">
            <MemoSettings startValue={startValue}
                          maxValue={maxValue}
                          settingsActive={settingsActive}
                          onMaxValueChange={onMaxValueChange}
                          onStartValueChange={onStartValueChange}
                          onSetButtonClick={onSetButtonClick}
            />
            <Counter counterValue={counterValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     settingsActive={settingsActive}
                     increaseCounterValue={increaseCounterValue}
                     resetCounterValue={resetCounterValue}/>
        </div>
    )
}

export default App;
