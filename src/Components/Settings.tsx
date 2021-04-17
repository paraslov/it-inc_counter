import React from 'react'
import {Joke} from './Joke'
import {Button} from './Button'
import {SettingsMenu} from './SettingsMenu';

type SettingsPropsType = {
    value: number
    /**
     * maxValue should be more than zero or Scooby finds ya...
     */
    maxValue: number
}

export function Settings(props: SettingsPropsType) {
    return (
        <>
            {props.maxValue > 0 ?
                <div className={'counter'}>
                    <SettingsMenu value={props.value} maxValue={props.maxValue}/>
                    <div className={'control'}>
                        <Button value={props.value}
                                btnTitle={'set'}
                                changeCounterValue={() => []}/>
                    </div>
                </div> : <Joke/>}
        </>
    )
}