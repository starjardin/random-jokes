import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/globalContext'
import { DropDown, FieldsetStyles } from '../../styles/SelectStyles/'
import axios from 'axios'

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

	useEffect(
		() => {
			axios(`http://api.icndb.com/jokes/random?limitTo=${category}`).then((results) => {
				dispatch({
					type: 'FETCH_JOKES_BY_CATEGORY',
					payload: results.data
				})
			})
		},
		[ category, dispatch ]
	)

	return (
		<FieldsetStyles className={openDropDown ? 'open-dropdown' : ''}>
			<DropDown className='custom-select-wrapper' onClick={toggleOpen}>
				<div className={openDropDown ? 'custom-select open' : 'custom-select'}>
					<div className='custom-select__trigger'>
						<span>{openDropDown ? 'Select category' : category ? category : 'Category'}</span>
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
