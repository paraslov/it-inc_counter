import React, {ChangeEvent, useState} from 'react'

type SettingsMenuPropsType = {
    value: number
    maxValue: number
}

export function SettingsMenu(props: SettingsMenuPropsType) {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    return (
        <div className={`settingsWrapper ${props.value === props.maxValue ? 'maxWarning' : ''}`}>
            <div className={'inputItem'}>
                <span>max value: </span>
                <input type="number" value={maxValue} onChange={onMaxValueChange}/>
            </div>
            <div className={'inputItem'}>
                <span>start value: </span>
                <input type="number" value={startValue} onChange={onStartValueChange}/>
            </div>
        </div>
    )
}