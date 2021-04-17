import React, {ChangeEvent, useState} from 'react'

type SettingsMenuPropsType = {
    startValue: number
    maxValue: number
    onMaxValueChange: (newMaxValue: number) => void
    onStartValueChange: (newStartValue: number) => void
}

export function SettingsMenu(props: SettingsMenuPropsType) {


    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onMaxValueChange(+e.currentTarget.value)
    }
    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onStartValueChange(+e.currentTarget.value)
    }

    return (
        <div className={`settingsWrapper ${props.startValue === props.maxValue ? 'maxWarning' : ''}`}>
            <div className={'inputItem'}>
                <span>max value: </span>
                <input type="number" value={props.maxValue} onChange={onMaxValueChange}/>
            </div>
            <div className={'inputItem'}>
                <span>start value: </span>
                <input type="number" value={props.startValue} onChange={onStartValueChange}/>
            </div>
        </div>
    )
}