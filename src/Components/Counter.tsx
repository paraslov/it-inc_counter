import {CounterOutput} from './CounterOutput'
import React from 'react'
import {Joke} from './Joke'
import {Button} from './Button'

type CounterPropsType = {
    startValue: number
    /**
     * maxValue should be more than zero or Scooby finds ya...
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
                    <CounterOutput value={props.startValue} maxValue={props.maxValue}/>
                    <div className={'control'}>
                        <Button startValue={props.startValue}
                                btnTitle={'inc'}
                                maxValue={props.maxValue}
                                changeCounterValue={props.increaseCounterValue}/>
                        <Button startValue={props.startValue}
                                btnTitle={'reset'}
                                changeCounterValue={props.resetCounterValue}/>
                    </div>
                </div> : <Joke/>}
        </>
    )
}