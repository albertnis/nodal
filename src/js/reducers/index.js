import { combineReducers } from 'redux'
import tasks from './tasks'

const appReducer = combineReducers({
    tasks
})

export default appReducer
