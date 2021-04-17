import React, {useState} from 'react'
import {Button} from './Button'
import {SettingsMenu} from './SettingsMenu';

type SettingsPropsType = {
    startValue: number
    /**
     * maxValue should be more than zero or Scooby finds ya...
     */
    maxValue: number
    btnActive: boolean
    onMaxValueChange: (newMaxValue: number) => void
    onStartValueChange: (newStartValue: number) => void
    onSetButtonClick: () => void
}

export function Settings(props: SettingsPropsType) {
    return (
        <>
            {props.maxValue > 0 ?
                <div className={'counter'}>
                    <SettingsMenu startValue={props.startValue}
                                  maxValue={props.maxValue}
                                  onMaxValueChange={props.onMaxValueChange}
                                  onStartValueChange={props.onStartValueChange}/>
                    <div className={'control'}>
                        <Button counterValue={props.startValue}
                                btnTitle={'set'}
                                btnActive={props.btnActive}
                                btnOnClickCallback={props.onSetButtonClick}/>
                    </div>
                </div> : false}
        </>
    )
}