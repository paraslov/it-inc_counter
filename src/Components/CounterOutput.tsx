import React from 'react'

type CounterOutputPropsType = {
    value: number
    maxValue: number
    settingsUpdating: boolean
}

export function CounterOutput(props: CounterOutputPropsType) {
    return (
        <div className={`output ${props.value === props.maxValue ? 'maxWarning' : ''}`}>
            <div className={!props.settingsUpdating? 'settingsUpdatingMessage' : ''}>
                {!props.settingsUpdating ? `enter values and press "set"` : props.value}
            </div>
        </div>
    )
}