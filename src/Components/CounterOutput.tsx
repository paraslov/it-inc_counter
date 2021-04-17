import React from 'react'

type CounterOutputPropsType = {
    counterValue: number
    startValue: number
    maxValue: number
    settingsUpdating: boolean
}

export function CounterOutput(props: CounterOutputPropsType) {
    return (
        <div className={`output ${props.counterValue === props.maxValue ? 'maxWarning' : ''}`}>
            {
                props.startValue >= props.maxValue || props.startValue < 0 ?
                    <div className={!props.settingsUpdating ? 'settingsUpdatingMessage maxWarning' : ''}>
                        {!props.settingsUpdating ? 'incorrect value!' : props.counterValue}
                    </div>
                    :
                    <div className={!props.settingsUpdating ? 'settingsUpdatingMessage' : ''}>
                        {!props.settingsUpdating ? `enter values and press "set"` : props.counterValue}
                    </div>
            }
        </div>
    )
}