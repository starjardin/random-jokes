import React, { createContext, useEffect, useReducer } from 'react'

import { reducer } from './reducer'
import { initialStateType } from '../Interfaces'
import { API_KEY } from '../constant'
import { fetchJokes } from '../utils/fetchJokes'

//* initial state
const initialState: initialStateType = {
	isLoading: true,
	lastName: '',
	firstName: '',
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

//*Context provider component
export const ContextProvider: React.FC = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	async function fetchRandomJOke() {
		const data = await fetchJokes(API_KEY)
		dispatch({
			type: 'LOAD_RANDOM_JOKE',
			payload: data
		})
	}

	useEffect(() => {
		fetchRandomJOke()
	}, [])

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
}
