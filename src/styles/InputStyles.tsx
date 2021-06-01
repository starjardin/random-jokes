import styled from 'styled-components'

export const InputSyles = styled.fieldset`
	font-size: 12px;
	margin: 0 auto;
	position: relative;
	padding: 0;
	border: none;

	label {
		position: absolute;
		display: block;
		left: 16px;
		top: 50%;
		z-index: 4;
		transform: translateY(-50%);
		line-height: 2.17;
		letter-spacing: -0.52px;
		text-align: left;
		color: #c4c4c4;
	}

	input[type="text"] {
		position: relative;
		z-index: 2;
		font-family: Inter;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.63;
		letter-spacing: -0.52px;
		transition: 0.3s all ease;
		border-radius: 6px;
		border: solid 2px #c4c4c4;
		width: 100%;
		max-width: calc(437px - 16px * 2);
		padding-inline: 16px;
		padding-top: 26px;
		padding-bottom: 6px;
		color: #34394f;
	}

	input:focus + label {
		top: 25%;
	}
	input.focus + label {
		top: 25%;
	}

	input.focus {
		border: solid 2px #34394f;
	}
`

export const FormStyles = styled.form`
	position: relative;
	margin-top: 2rem;
	.open-dropdown {
		position: absolute;
		z-index: 4;
		width: 100%;
		margin: 0;
		background-color: #fff;
	}

	button {
		margin-top: 32px;
	}

	.open-dropdown ~ button {
		margin-top: calc(16px * 7.5);
	}

	.open-dropdown ~ fieldset {
		visibility: hidden;
	}
`
