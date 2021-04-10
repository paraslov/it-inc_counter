import React from 'react'

type ResetButtonPropsType = {
    value: number
    resetCounterValue: () => void
}

export function ResetButton(props: ResetButtonPropsType) {
    return (
        <div className={'reset'}>
            <button className={props.value === 0 ? 'disabled' : ''}
                    onClick={props.resetCounterValue}
                    disabled={props.value === 0}>reset
            </button>
        </div>
    )
}