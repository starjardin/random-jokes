import { initialStateType, Action } from '../Interfaces'

//* Reducer function
export const reducer = (state: initialStateType, action: Action) => {
	switch (action.type) {
		case 'LOAD_RANDOM_JOKE': {
			return {
				...state,
				isLoading: false,
				joke: action.payload
			}
		}

		case 'FETCH_RANDOM_JOKES': {
			return {
				...state,
				isLoading: false,
				joke: action.payload
			}
		}
		case 'IMPERSONATE': {
			return {
				...state,
				firstName: action.payloadfirstName,
				lastName: action.payloadlastName
			}
		}
		case 'CHOOSE_CATEGORY': {
			return {
				...state,
				category: action.payload
			}
		}
		case 'INCREASE_NUMBER': {
			return {
				...state,
				numberOfJokesToSave: state.numberOfJokesToSave + 1
			}
		}
		case 'DECREASE_NUMBER': {
			return {
				...state,
				numberOfJokesToSave: state.numberOfJokesToSave - 1
			}
		}
		case 'FETCH_JOKES_BY_CATEGORY': {
			return {
				...state,
				joke: action.payload
			}
		}
		case 'FETCH_MULTIPLE_JOKES': {
			return {
				...state,
				jokesToSave: action.payload
			}
		}
		default:
			return state
	}
}
