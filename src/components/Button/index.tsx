import { useContext } from 'react'

import { GlobalContext } from '../../context/globalContext'
import { ButtonStyles } from '../../styles/ButtonStyles'

export default function Button() {
	const { state } = useContext(GlobalContext)
	const { firstName, lastName } = state

	return (
		<ButtonStyles>
			Draw a random {firstName ? firstName : 'Chuck'} {!firstName ? 'Norris' : lastName} Joke
		</ButtonStyles>
	)
}
