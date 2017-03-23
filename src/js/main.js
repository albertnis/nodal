import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import appReducer from './reducers'
import { appEpicMiddleware } from './epics'
import initialState from './store'
import '../scss/main.scss'

let store = createStore(appReducer, initialState, applyMiddleware(appEpicMiddleware))

store.subscribe(() => {
    console.log("Store changed", store.getState())
})


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
