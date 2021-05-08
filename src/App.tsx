import React, {useCallback, useEffect, useReducer} from 'react'
import './App.css'
import {Counter} from './Components/Counter'
import {MemoSettings} from './Components/Settings'
import {
    counterReducer,
    counterValuesInitialization,
    onCounterValueChange,
    onMaxValueChangeAC,
    onSetButtonClickAC,
    onStartValueChangeAC
} from './Redux/counter_reducer';

export type InitStateType = {
    startValue: number
    maxValue: number
    counterValue: number
    settingsIsActive: boolean
}

function App() {

    const initState: InitStateType = {
        startValue: 0,
        maxValue: 5,
        counterValue: 0,
        settingsIsActive: false,
    }
    const [counterState, counterDispatch] = useReducer(counterReducer, initState)

    useEffect(() => {
        let counterSettings = localStorage.getItem('counterSettings')
        if (counterSettings) {
            let values = JSON.parse(counterSettings)
            counterDispatch(counterValuesInitialization(values.startValue, values.maxValue))
        }
    }, [])

    const increaseCounterValue = () => counterDispatch(onCounterValueChange(counterState.counterValue + 1))
    const resetCounterValue = () => counterDispatch(onCounterValueChange(counterState.startValue))
    const onMaxValueChange = useCallback((newMaxValue: number) => counterDispatch(onMaxValueChangeAC(newMaxValue)), [])
    const onStartValueChange = useCallback((newStartValue: number) => counterDispatch(onStartValueChangeAC(newStartValue)), [])
    const onSetButtonClick = useCallback(() => {
        localStorage.setItem('counterSettings',
            JSON.stringify({startValue: counterState.startValue, maxValue: counterState.maxValue}))
        counterDispatch(onSetButtonClickAC())
    }, [counterState.startValue, counterState.maxValue])

    return (
        <div className="App">
            <MemoSettings startValue={counterState.startValue}
                          maxValue={counterState.maxValue}
                          settingsActive={counterState.settingsIsActive}
                          onMaxValueChange={onMaxValueChange}
                          onStartValueChange={onStartValueChange}
                          onSetButtonClick={onSetButtonClick}
            />
            <Counter counterValue={counterState.counterValue}
                     maxValue={counterState.maxValue}
                     startValue={counterState.startValue}
                     settingsActive={counterState.settingsIsActive}
                     increaseCounterValue={increaseCounterValue}
                     resetCounterValue={resetCounterValue}/>
        </div>
    )
}

export default App;
