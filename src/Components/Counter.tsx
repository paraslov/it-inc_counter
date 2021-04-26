import {CounterOutput} from './CounterOutput'
import React from 'react'
import {Joke} from './Joke'
import {Button} from './Button'

type CounterPropsType = {
    counterValue: number
    /**
     * maxValue should be more than zero or Scooby finds ya...
     */
    startValue: number
    maxValue: number
    settingsActive: boolean
    increaseCounterValue: () => void
    resetCounterValue: () => void
}

export function Counter(props: CounterPropsType) {
    let btnIncDisabled = props.settingsActive || props.counterValue === props.maxValue
    console.log('Counter rendering')
    return (
        <div className={'counter'}>
            <CounterOutput counterValue={props.counterValue}
                           startValue={props.startValue}
                           settingsUpdating={!props.settingsActive}
                           maxValue={props.maxValue}/>
            <div className={'control'}>
                <Button btnTitle={'inc'}
                        btnDisabled={btnIncDisabled}
                        btnOnClickCallback={props.increaseCounterValue}/>
                <Button btnTitle={'reset'}
                        btnDisabled={props.settingsActive}
                        btnOnClickCallback={props.resetCounterValue}/>
            </div>
        </div>
    )
}