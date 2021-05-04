import React, {useMemo} from 'react'
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

function Settings(props: SettingsPropsType) {
    let btnDisabled: boolean = !props.settingsActive || props.startValue >= props.maxValue || props.startValue < 0
    console.log('Setting rendering')
    return (
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
        </div>
    )
}

export const MemoSettings = React.memo(Settings)