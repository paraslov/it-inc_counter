import React, {ChangeEvent, useState} from 'react'

type SettingsMenuPropsType = {
    startValue: number
    maxValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
}

export function SettingsMenu(props: SettingsMenuPropsType) {


    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
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