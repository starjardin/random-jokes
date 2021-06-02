import { useContext } from 'react'
import Loader from 'react-loader-spinner'

import ChuckNorrisPhoto from '../../assets/chuck-norris-photo.jpg'
import randomPhoto from '../../assets/random-photo.jpg'
import { GlobalContext } from '../../context/globalContext'
import Inputs from '../Inputs'
import Minus from '../../assets/minus.svg'
import Plus from '../../assets/plus.svg'
import {
	HomeStyles,
	ButtonContainer,
	ChuckNorrisPhotoStyles,
	TextJokes,
	ErrorStyles,
	LoaderStyles
} from '../../styles/HomePageStyles'
import SaveJokes from '../SaveJokes'

const HomePage = () => {
	const { state, dispatch } = useContext(GlobalContext)
	//*Deep destructuring from state
	const { joke: { value: { joke } }, numberOfJokesToSave, isLoading } = state

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
		//*can't go below zero // Can't download -(numbers) of jokes
		return
	}
	//* set error class
	const errorClass = numberOfJokesToSave > 100 ? 'error' : ''

	return (
		<div>
			{isLoading ? (
				<LoaderStyles>
					<Loader type='Puff' color='#00BFFF' height={100} width={100} />
				</LoaderStyles>
			) : (
				<HomeStyles>
					<ChuckNorrisPhotoStyles
						//* if name are Chuck Norris: load Chuck Norris picture else load Random picture
						src={state.firstName === '' && state.lastName === '' ? ChuckNorrisPhoto : randomPhoto}
						alt={'author-picture'}
					/>
					<TextJokes>{joke}</TextJokes>
					<Inputs />
					<ButtonContainer>
						<div className={errorClass}>
							<button onClick={decreaseNumber} className={errorClass}>
								<img src={Minus} alt='minus-sign' />
							</button>
							<span>
								{numberOfJokesToSave}
								{numberOfJokesToSave > 0 ? '|' : ''}
							</span>
							<button onClick={increaseNumber} className={errorClass}>
								<img src={Plus} alt='plus-sign' />
							</button>
						</div>
						<SaveJokes />
					</ButtonContainer>
					{/* display this paragraph if the number of jokes to display is more than 100 */}
					{numberOfJokesToSave > 100 && <ErrorStyles>You can pick a number from 1 to 100</ErrorStyles>}
				</HomeStyles>
			)}
		</div>
	)
}

export default HomePage
