import React, {useState} from 'react'
import {Button} from './Button'
import {SettingsMenu} from './SettingsMenu';

type SettingsPropsType = {
    startValue: number
    /**
     * maxValue should be more than zero or Scooby finds ya...
     */
    maxValue: number
    settingsActive: boolean
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setSettingsActive: (active: boolean) => void
}

export function Settings(props: SettingsPropsType) {
    return (
        <>
            {props.maxValue > 0 ?
                <div className={'counter'}>
                    <SettingsMenu startValue={props.startValue}
                                  maxValue={props.maxValue}
                                  setMaxValue={props.setMaxValue}
                                  setStartValue={props.setStartValue}/>
                    <div className={'control'}>
                        <Button startValue={props.startValue}
                                btnTitle={'set'}
                                btnActive={props.settingsActive}
                                changeCounterValue={() => []}/>
                    </div>
                </div> : false}
        </>
    )
}