import {CounterOutput} from './CounterOutput'
import React from 'react'
import {Joke} from './Joke'
import {Button} from './Button'

type CounterPropsType = {
    counterValue: number
    /**
     * maxValue should be more than zero or Scooby finds ya...
     */
    maxValue: number
    btnActive: boolean
    increaseCounterValue: () => void
    resetCounterValue: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <>
            {props.maxValue > 0 ?
                <div className={'counter'}>
                    <CounterOutput value={props.counterValue}
                                   settingsUpdating={props.btnActive}
                                   maxValue={props.maxValue}/>
                    <div className={'control'}>
                        <Button counterValue={props.counterValue}
                                btnTitle={'inc'}
                                btnActive={props.btnActive}
                                maxValue={props.maxValue}
                                btnOnClickCallback={props.increaseCounterValue}/>
                        <Button counterValue={props.counterValue}
                                btnTitle={'reset'}
                                btnActive={props.btnActive}
                                btnOnClickCallback={props.resetCounterValue}/>
                    </div>
                </div> : <Joke/>}
        </>
    )
}