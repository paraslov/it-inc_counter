import {CounterOutput} from './CounterOutput'
import {IncreaseButton} from './IncreaseButton'
import {ResetButton} from './ResetButton'
import React from 'react'
import {Joke} from './Joke'

type CounterPropsType = {
    value: number
    /**
     * maxValue should be more than zero or Scooby finds you...
     */
    maxValue: number
    increaseCounterValue: () => void
    resetCounterValue: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <>
            {props.maxValue > 0 ?
                <div className={'counter'}>
                    <CounterOutput value={props.value} maxValue={props.maxValue}/>
                    <div className={'control'}>
                        <IncreaseButton value={props.value}
                                        maxValue={props.maxValue}
                                        increaseCounterValue={props.increaseCounterValue}/>
                        <ResetButton value={props.value}
                                     resetCounterValue={props.resetCounterValue}/>
                    </div>
                </div> : <Joke />}
        </>
    )
}