import React from 'react'

type ButtonPropsType = {
    btnTitle: string
    value: number
    maxValue?: number
    changeCounterValue: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <div className={'inc'}>
            <button onClick={props.changeCounterValue}
                    className={props.value === props.maxValue ? 'disabled' : ''}
                    disabled={props.value === props.maxValue}>{props.btnTitle}
            </button>
        </div>
    )
}