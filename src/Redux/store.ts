import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter_reducer';
import {loadSettings, saveSettings} from './store-utilits';

// loading counter setting form localStorage ===================>
const loadedSettings = loadSettings()

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadedSettings)

// saving counter setting to localStorage =====================>
store.subscribe(() => saveSettings(store.getState())
)