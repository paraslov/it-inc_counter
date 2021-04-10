import React from 'react'

type CounterOutputPropsType = {
    value: number
    maxValue: number
}

export function CounterOutput(props: CounterOutputPropsType) {
    return (
        <div className={`output ${props.value === props.maxValue ? 'maxWarning' : ''}`}>
            <div>{props.value}</div>
        </div>
    )
}