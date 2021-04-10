import React from 'react'

type IncreaseButtonPropsType = {
    value: number
    maxValue: number
    increaseCounterValue: () => void
}

export function IncreaseButton(props: IncreaseButtonPropsType) {
    return (
        <div className={'inc'}>
            <button onClick={props.increaseCounterValue}
                    className={props.value === props.maxValue ? 'disabled' : ''}
                    disabled={props.value === props.maxValue}>inc
            </button>
        </div>
    )
}