import { combineReducers } from 'redux'
import users from './users'
import spaces from './spaces'
import projects from './projects'
import tasklists from './tasklists'
import tasks from './tasks'

const appReducer = combineReducers({
    users,
    spaces,
    projects,
    tasklists,
    tasks
})

export default appReducer
