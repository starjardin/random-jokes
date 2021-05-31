import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ContextProvider } from './context/globalContext'
import { GlobalStyle } from './globalStyle'

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<GlobalStyle />
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
