import { useContext } from 'react'

import { GlobalContext } from '../../context/globalContext'
import Select from './Select'
import { InputStyles, FormStyles } from '../../styles/InputStyles'
import { API_KEY } from '../../constant'
import { fetchJokes } from '../../utils/fetchJokes'
import Button from '../Button'

export default function Inputs() {
	const { dispatch, state } = useContext(GlobalContext)
	const { firstName } = state

	async function handleOnSubmit(e: React.SyntheticEvent) {
		e.preventDefault()
		const target = e.target as typeof e.target & {
			impersonate: { value: string }
		}
		const formValue = target.impersonate.value

		let firstNameValue = ''
		let lastNameValue = ''
		if (formValue.trim() !== '') {
			//* if the input is not empty, take the value then set them as first and last name
			firstNameValue = formValue.split(' ')[0]
			//* if there are more than two words in the input, set last name
			lastNameValue = formValue.split(' ').slice(1).join(' ')
			const data = await fetchJokes(`${API_KEY}?firstName=${firstNameValue}&lastName=${lastNameValue}`)
			dispatch({
				type: 'FETCH_RANDOM_JOKES',
				payload: data
			})
		} else if (formValue.trim() === '') {
			//* if there is neither first name nor last name: fetch from Chuck Norris random jokes
			const data = await fetchJokes(API_KEY)
			dispatch({
				type: 'FETCH_RANDOM_JOKES',
				payload: data
			})
		}

		dispatch({
			//* set firstName and lastName here
			type: 'IMPERSONATE',
			payloadFirstName: firstNameValue,
			payloadLastName: lastNameValue
		})
	}

	return (
		<div>
			<FormStyles onSubmit={(e) => handleOnSubmit(e)}>
				<Select />
				<InputStyles>
					<input
						name='impersonate'
						type='text'
						id='impersonate'
						autoComplete='off'
						className={`${firstName ? 'focus' : ''}`}
					/>
					<label htmlFor='impersonate'>Impersonate Chuck Norris</label>
				</InputStyles>
				<Button />
			</FormStyles>
		</div>
	)
}
