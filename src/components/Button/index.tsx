import { useContext } from 'react'

import { GlobalContext } from '../../context/globalContext'
import { API_KEY } from '../../constant'
import { fetchJokes } from '../../utils/fetchJokes'
import { ButtonStyles } from '../../styles/ButtonStyles'

export default function Button() {
	const { dispatch, state } = useContext(GlobalContext)
	const { firstName, lastName } = state

	async function fetchRandomJokes() {
		//*fetch random jokes
		const data = await fetchJokes(`${API_KEY}?firstName=${firstName}&lastName=${lastName}`)
		dispatch({
			type: 'FETCH_RANDOM_JOKES',
			payload: data
		})
	}

	return (
		<div>
			<ButtonStyles onClick={fetchRandomJokes}>
				Draw a random {firstName} {lastName} Joke
			</ButtonStyles>
		</div>
	)
}
