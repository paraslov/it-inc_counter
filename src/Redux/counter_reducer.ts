import {InitStateType} from '../App';


export const counterReducer = (state: InitStateType, action: CounterReducerActionsType): InitStateType => {
    switch (action.type) {
        case 'ps/counter_reducer/ON_COUNTER_VALUE_CHANGE':
            return {...state, counterValue: action.newCounterValue}
        case 'ps/counter_reducer/ON_MAX_VALUE_CHANGE':
            return {...state, maxValue: action.newMaxValue, settingsIsActive: true, counterValue: 0}
        case 'ps/counter_reducer/ON_START_VALUE_CHANGE':
            return {...state, startValue: action.newStartValue, settingsIsActive: true}
        case 'ps/counter_reducer/ON_SET_BUTTON_CLICK':
            return {...state, settingsIsActive: false, counterValue: state.startValue}
        case 'ps/counter_reducer/COUNTER_VALUES_INITIALIZATION':
            return {...state, counterValue: action.startValue, startValue: action.startValue, maxValue: action.maxValue}
        default: 
            return state
    }
}

export type CounterReducerActionsType = ReturnType<typeof onMaxValueChangeAC> | ReturnType<typeof onStartValueChangeAC> |
    ReturnType<typeof onSetButtonClickAC> | ReturnType<typeof onCounterValueChange> |
    ReturnType<typeof counterValuesInitialization>

export const onCounterValueChange = (newCounterValue: number) => 
    ({type: 'ps/counter_reducer/ON_COUNTER_VALUE_CHANGE', newCounterValue} as const)
export const onMaxValueChangeAC = (newMaxValue: number) =>
    ({type: 'ps/counter_reducer/ON_MAX_VALUE_CHANGE', newMaxValue} as const)
export const onStartValueChangeAC = (newStartValue: number) =>
    ({type: 'ps/counter_reducer/ON_START_VALUE_CHANGE', newStartValue} as const)
export const onSetButtonClickAC = () =>
    ({type: 'ps/counter_reducer/ON_SET_BUTTON_CLICK'} as const)
export const counterValuesInitialization = (startValue: number, maxValue: number) =>
    ({type: 'ps/counter_reducer/COUNTER_VALUES_INITIALIZATION', startValue, maxValue} as const)