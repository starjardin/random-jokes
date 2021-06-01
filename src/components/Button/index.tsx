import { useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { GlobalContext } from '../../context/globalContext'
import { API_KEY } from '../../constant'

const ButtonStyles = styled.button`
	padding-block: 16.8px;
	border-radius: 6px;
	background-color: #34394f;
	font-family: Inter;
	font-size: 16px;
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.63;
	letter-spacing: -0.52px;
	color: #ffffff;
	width: 100%;
`

export default function Button() {
	const { dispatch, state } = useContext(GlobalContext)
	const { firstName, lastName } = state
	return (
		<div>
			<ButtonStyles
				onClick={() => {
					axios(`${API_KEY}?firstName=${firstName}&lastName=${lastName}`).then((results) => {
						dispatch({
							type: 'FETCH_RANDOM_JOKES',
							payload: results.data
						})
					})
				}}>
				Draw a random {firstName} {lastName} Joke
			</ButtonStyles>
		</div>
	)
}
