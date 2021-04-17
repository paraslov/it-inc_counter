import React from 'react'

type ButtonPropsType = {
    btnTitle: string
    btnActive: boolean
    counterValue: number
    maxValue?: number
    btnOnClickCallback: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <div className={'btn'}>
            <button onClick={props.btnOnClickCallback}
                    className={!props.btnActive || props.counterValue === props.maxValue ? 'disabled' : ''}
                    disabled={!props.btnActive || props.counterValue === props.maxValue}>{props.btnTitle}
            </button>
        </div>
    )
}