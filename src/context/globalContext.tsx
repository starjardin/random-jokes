import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

import { reducer } from './reducer'
import { initialStateType } from '../Interfaces'
import { API_KEY } from '../constant'

//* initial state
const initialState: initialStateType = {
	isLoading: true,
	lastName: 'Norris',
	firstName: 'Chuck',
	category: '',
	numberOfJokesToSave: 0,
	jokesToSave: {
		type: '',
		value: []
	},
	joke: {
		type: '',
		value: {
			id: '',
			joke: '',
			category: []
		}
	}
}

//*GlobalContext declaration
export const GlobalContext = createContext<{
	state: initialStateType
	dispatch: React.Dispatch<any>
}>({
	state: initialState,
	dispatch: () => null
})

//*Context porvider component
export const ContextProvider: React.FC = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	function fetchRandomJOke() {
		axios(API_KEY).then((results) => {
			dispatch({
				type: 'LOAD_RANDOM_JOKE',
				payload: results.data
			})
		})
	}

	useEffect(() => {
		fetchRandomJOke()
	}, [])

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
}
