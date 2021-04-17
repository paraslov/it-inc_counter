import React from 'react'

type ButtonPropsType = {
    btnTitle: string
    btnDisabled: boolean
    btnOnClickCallback: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <div className={'btn'}>
            <button onClick={props.btnOnClickCallback}
                    className={props.btnDisabled ?'disabled' : ''}
                    disabled={props.btnDisabled}>{props.btnTitle}
            </button>
        </div>
    )
}