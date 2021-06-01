import { useContext } from 'react'
import styled from 'styled-components'

import { GlobalContext } from '../../context/globalContext'
import Select from './Select'
import { ButtonSubmitStyles, InputSyles, FormStyles } from '../../styles/InputStyles'
import { API_KEY } from '../../constant'
import { fetchJokes } from '../../utils/fetchJokes'

export default function Inputs() {
	const { dispatch } = useContext(GlobalContext)

	async function handleOnSubmit(e: any) {
		e.preventDefault()
		const formValue = e.currentTarget.impersonate.value
		let firstNameValue = ''
		let lastNameValue = ''
		if (formValue.trim() !== '') {
			//* if the input is not empty, take the value then set them as first and last name
			firstNameValue = formValue.split(' ').shift()
			//* if there are more than two words in the input, set last name
			lastNameValue = formValue.split(' ').slice(1).join(' ')
		} else if (formValue.trim() === '') {
			//*Just return chuck norris if there is nothing in the input
			firstNameValue = 'Chuck'
			lastNameValue = 'Norris'
		}

		dispatch({
			type: 'IMPERSONATE',
			payloadfirstName: firstNameValue,
			payloadlastName: lastNameValue
		})
		//*When you submit, fetch jokes by using the first and last name
		const data = await fetchJokes(`${API_KEY}?firstName=${firstNameValue}&lastName=${lastNameValue}`)
		dispatch({
			type: 'FETCH_RANDOM_JOKES',
			payload: data
		})
	}

	return (
		<div>
			<FormStyles onSubmit={(e) => handleOnSubmit(e)}>
				<Select />
				<InputSyles>
					<input name='impersonate' type='text' id='impersonate' autoComplete='off' />
					<label htmlFor='email'>Impersonate Chuck Norris</label>
				</InputSyles>
				<ButtonSubmitStyles type='submit' />
			</FormStyles>
		</div>
	)
}
