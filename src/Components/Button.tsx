import React from 'react'

type ButtonPropsType = {
    btnTitle: string
    btnActive?: boolean
    startValue: number
    maxValue?: number
    changeCounterValue: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <div className={'btn'}>
            <button onClick={props.changeCounterValue}
                    className={props.startValue === props.maxValue || props.btnActive ? 'disabled' : ''}
                    disabled={props.startValue === props.maxValue || props.btnActive}>{props.btnTitle}
            </button>
        </div>
    )
}