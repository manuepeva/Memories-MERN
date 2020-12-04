import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import reducers from './redux/reducers'
import './index.css'
import store from './redux/store'

ReactDom.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'))
