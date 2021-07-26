import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import applicationReducers from './applicationReducers'

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['application'],
}

const rootReducer = combineReducers({
    application: applicationReducers,
})

export default persistReducer(rootPersistConfig, rootReducer)
