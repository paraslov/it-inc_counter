import React, {useCallback} from 'react'
import './App.css'
import {Counter} from './Components/Counter'
import {MemoSettings} from './Components/Settings'
import {
    CounterReducerActionsType,
    onCounterValueChange,
    onMaxValueChangeAC,
    onSetButtonClickAC,
    onStartValueChangeAC
} from './Redux/counter_reducer';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {AppRootType} from './Redux/store';


function App() {

    const counterDispatch = useDispatch<Dispatch<CounterReducerActionsType>>()
    const counterState = useSelector((state: AppRootType) => state.counter)

    const increaseCounterValue = () => counterDispatch(onCounterValueChange(counterState.counterValue + 1))
    const resetCounterValue = () => counterDispatch(onCounterValueChange(counterState.startValue))
    const onMaxValueChange = useCallback((newMaxValue: number) =>
        counterDispatch(onMaxValueChangeAC(newMaxValue)), [counterDispatch])
    const onStartValueChange = useCallback((newStartValue: number) =>
        counterDispatch(onStartValueChangeAC(newStartValue)), [counterDispatch])
    const onSetButtonClick = useCallback(() =>
        counterDispatch(onSetButtonClickAC()), [counterDispatch])

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
