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
    onMaxValueChange: (newMaxValue: number) => void
    onStartValueChange: (newStartValue: number) => void
    onSetButtonClick: () => void
}

export function Settings(props: SettingsPropsType) {
    let btnDisabled: boolean = !props.settingsActive || props.startValue >= props.maxValue
    // if (props.startValue >= props.maxValue) {
    //     btnDisabled = true
    // }

    return (
        <>
            {props.maxValue > 0 ?
                <div className={'counter'}>
                    <SettingsMenu startValue={props.startValue}
                                  maxValue={props.maxValue}
                                  onMaxValueChange={props.onMaxValueChange}
                                  onStartValueChange={props.onStartValueChange}/>
                    <div className={'control'}>
                        <Button btnTitle={'set'}
                                btnDisabled={btnDisabled}
                                btnOnClickCallback={props.onSetButtonClick}/>
                    </div>
                </div> : false}
        </>
    )
}