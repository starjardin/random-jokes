import { useContext, useState, useEffect } from 'react'

import { GlobalContext } from '../../context/globalContext'
import { DropDown, FieldsetStyles } from '../../styles/SelectStyles/'
import { API_KEY } from '../../constant'
import { fetchJokes } from '../../utils/fetchJokes'

export default function Select() {
	const [ openDropDown, setOpenDropDown ] = useState(false)
	const { state, dispatch } = useContext(GlobalContext)
	const { category } = state
	function toggleOpen() {
		setOpenDropDown(!openDropDown)
	}

	function handleCategory(e: any) {
		dispatch({
			type: 'CHOOSE_CATEGORY',
			payload: e.target.dataset.value
		})
	}

	async function fetchJokesByCategory() {
		if (category) {
			const data = await fetchJokes(`${API_KEY}?limitTo=${category}`)
			dispatch({
				type: 'FETCH_JOKES_BY_CATEGORY',
				payload: data
			})
		}
	}

	useEffect(
		() => {
			fetchJokesByCategory()
		},
		// eslint-disable-next-line
		[ category ]
	)

	return (
		<FieldsetStyles className={openDropDown ? 'open-dropdown' : ''}>
			<DropDown className='custom-select-wrapper' onClick={toggleOpen}>
				<div className={openDropDown ? 'custom-select open' : 'custom-select'}>
					<div className='custom-select__trigger'>
						<span data-value={''} onClick={(e) => handleCategory(e)}>
							{openDropDown ? 'Select category' : category ? category : 'Category'}
						</span>
						<div className={openDropDown ? 'arrow' : 'arrow'} />
					</div>
					{openDropDown && (
						<div className='custom-options'>
							<span className='custom-option ' data-value='explicit' onClick={(e) => handleCategory(e)}>
								Explicit
							</span>
							<span className='custom-option ' data-value='nerdy' onClick={(e) => handleCategory(e)}>
								Nerdy
							</span>
						</div>
					)}
				</div>
			</DropDown>
		</FieldsetStyles>
	)
}
