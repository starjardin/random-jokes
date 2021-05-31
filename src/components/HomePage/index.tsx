import { useContext } from 'react'

import ChuckNorrisPhoto from '../../assets/Chuck-Norris-photo@2x.jpg'
import randomPhoto from '../../assets/Random-photo@3x.jpg'
import { GlobalContext } from '../../context/globalContext'
import ButtonNextToFetchNextJoke from '../Button'
import Inputs from '../Inputs'
import Minus from '../../assets/minus.svg'
import Plus from '../../assets/plus.svg'
import { HomeStyles, ButtonContainer, ChuckNorrisPhotoStyles, TextJokes } from '../../styles/HomePageStyles'
import SaveJokes from '../SaveJokes'

const HomePage = () => {
	const { state, dispatch } = useContext(GlobalContext)
	const { joke: { value: { joke } }, numberOfJokesToSave } = state

	function increaseNumber() {
		dispatch({
			type: 'INCREASE_NUMBER'
		})
	}

	function decreaseNumber() {
		if (numberOfJokesToSave > 0) {
			dispatch({
				type: 'DECREASE_NUMBER'
			})
		}
		return
	}

	return (
		<HomeStyles>
			<ChuckNorrisPhotoStyles
				src={state.firstName === 'Chuck' && state.lastName === 'Norris' ? ChuckNorrisPhoto : randomPhoto}
			/>
			<TextJokes>{joke}</TextJokes>
			<Inputs />
			<ButtonNextToFetchNextJoke />
			<ButtonContainer>
				<div>
					<button onClick={decreaseNumber}>
						<img src={Minus} alt='minus-sign' />
					</button>
					<span>{numberOfJokesToSave}</span>
					<button onClick={increaseNumber}>
						<img src={Plus} alt='plus-sign' />
					</button>
				</div>
				<SaveJokes />
			</ButtonContainer>
		</HomeStyles>
	)
}

export default HomePage
