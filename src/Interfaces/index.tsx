//* Action type
export type Action =
	| { type: 'LOAD_RANDOM_JOKE'; payload: jokeType }
	| { type: 'FETCH_RANDOM_JOKES'; payload: jokeType }
	| { type: 'IMPERSONATE'; payloadFirstName: string; payloadLastName: string }
	| { type: 'CHOOSE_CATEGORY'; payload: string }
	| { type: 'INCREASE_NUMBER' }
	| { type: 'DECREASE_NUMBER' }
	| { type: 'FETCH_JOKES_BY_CATEGORY'; payload: jokeType }
	| { type: 'FETCH_MULTIPLE_JOKES'; payload: multipleJokesType }

//* JokeInterface
export interface jokeType {
	type: string
	value: {
		id: string
		joke: string
		category: []
	}
}

export interface typeOfMultipleJokesObjects {
	id: string
	joke: string
	categories: []
}

export interface multipleJokesType {
	type: string
	value: Array<typeOfMultipleJokesObjects>
}

//*State interface
export interface initialStateType {
	isLoading: boolean
	joke: jokeType
	firstName: string
	lastName: string
	category: string
	numberOfJokesToSave: number
	jokesToSave: multipleJokesType
}
