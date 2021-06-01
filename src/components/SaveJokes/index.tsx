import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/globalContext'
import axios from 'axios'
import styled from 'styled-components'

const AnchorStyles = styled.a`
	&.disabled {
		display: none;
	}
`

const SaveJokes = () => {
	const { state, dispatch } = useContext(GlobalContext)
	const { numberOfJokesToSave, jokesToSave } = state
	const [ downloadLink, setDownloadLink ] = useState('')
	// const text = jokesToSave.map((el) => el.joke)
	console.log(jokesToSave.value.map((el: any) => el.joke))

	const makeTextFile = () => {
		const data = new Blob([], { type: 'text/plain' })

		if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)
		setDownloadLink(window.URL.createObjectURL(data))
	}

	function fetchJokesToSave() {
		axios(`http://api.icndb.com/jokes/random/${numberOfJokesToSave}`).then((results) => {
			dispatch({
				type: 'FETCH_MULTIPLE_JOKES',
				payload: results.data
			})
		})
	}

	useEffect(
		() => {
			makeTextFile()
			fetchJokesToSave()
		},
		[ numberOfJokesToSave ]
	)

	return (
		<AnchorStyles
			// this attribute sets the filename
			download='list.txt'
			// link to the download URL
			href={downloadLink}
			className={numberOfJokesToSave < 0 || numberOfJokesToSave > 100 ? 'disabled' : ''}>
			Save Jokes
		</AnchorStyles>
	)
}

export default SaveJokes
