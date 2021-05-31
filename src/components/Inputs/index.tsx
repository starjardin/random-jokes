import { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { GlobalContext } from '../../context/globalContext'
import Select from './Select'
import { InputSyles, FormStyles } from '../../styles/InputStyles'

const ButtonSubmitStyles = styled.button`visibility: hidden;`

export default function Inputs() {
	const { dispatch } = useContext(GlobalContext)

	function handleOnSubmit(e: any) {
		e.preventDefault()
		const formValue = e.currentTarget.impersonate.value
		let firstNameValue = ''
		let lastNameValue = ''
		if (formValue.trim() !== '') {
			firstNameValue = formValue.split(' ').shift()
			lastNameValue = formValue.split(' ').slice(1).join(' ')
		} else if (formValue.trim() === '') {
			firstNameValue = 'Chuck'
			lastNameValue = 'Norris'
		}

		dispatch({
			type: 'IMPERSONATE',
			payloadfirstName: firstNameValue,
			payloadlastName: lastNameValue
		})
		axios(`http://api.icndb.com/jokes/random?
    firstName=${firstNameValue}&
        lastName=${lastNameValue}`).then((results) => {
			dispatch({
				type: 'FETCH_RANDOM_JOKES',
				payload: results.data
			})
		})
	}

	return (
		<div>
			<FormStyles onSubmit={(e) => handleOnSubmit(e)}>
				<Select />
				<InputSyles style={{ border: 'none' }}>
					<input name='impersonate' type='text' id='impersonate' autoComplete='off' />
					<label htmlFor='email'>Impersonate Chuck Norris</label>
				</InputSyles>
				<ButtonSubmitStyles type='submit' />
			</FormStyles>
		</div>
	)
}
