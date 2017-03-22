import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import appReducer from './reducers'
import initialState from './store'
import '../scss/main.scss'

let store = createStore(appReducer, initialState)

store.subscribe(() => {
    console.log("Store changed", store.getState())
})


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
