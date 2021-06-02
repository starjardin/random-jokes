import styled from 'styled-components'

export const HomeStyles = styled.div`
	max-width: 439px;
	padding: 48px 58px 72px;
	border-radius: 20px;
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
	background-color: #ffffff;
	margin: auto;
`

export const LoaderStyles = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%);
`

export const ChuckNorrisPhotoStyles = styled.img`
	width: 100%;
	height: auto;
	max-height: 127px;
	margin: auto;
	object-fit: contain;
`

export const TextJokes = styled.div`
	margin: 24px 0 32px;
	font-family: Inter;
	font-size: 18px;
	font-weight: 600;
	font-stretch: normal;
	font-style: italic;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	color: #34394f;
`

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 52px;
	gap: 8px;

	& div {
		flex-basis: 30%;
		background-color: #f5f6f8;
		padding: 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 6px;
	}

	button,
	a {
		background-color: #f5f6f8;
		border: none;
		display: block;
		padding: 0;
	}

	& > a {
		flex-basis: 70%;
		border-radius: 6px;
		display: flex;
		background-color: #34394f;
		color: #ffffff;
		flex-direction: revert;
		justify-content: space-around;
		align-items: center;
		text-decoration: none;
	}

	.error {
		background-color: #f39a9a;
	}

	span {
		color: #34394f;
		display: inline-block;
	}
`

export const ErrorStyles = styled.p`
	margin: 12px 0 0;
	opacity: 0.6;
	font-family: Inter;
	font-size: 16px;
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.63;
	letter-spacing: -0.52px;
	text-align: left;
	color: #f39a9a;
`
