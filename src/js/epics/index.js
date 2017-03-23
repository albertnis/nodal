import { applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware  } from 'redux-observable'
import { editTaskEpic } from './tasks'

const appEpic = combineEpics(
    editTaskEpic
)

export const appEpicMiddleware = createEpicMiddleware(appEpic)
