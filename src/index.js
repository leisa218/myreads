import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory';
import App from './App'
import './index.css'

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
	<BrowserRouter history={hashHistory}>
	<App />
	</BrowserRouter>, 
	document.getElementById('root')
	)
