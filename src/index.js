import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.js'
import store from './redux/redux-store'

import './Styles/app.css'

    render(
        
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root')
        )
