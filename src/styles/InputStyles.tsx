import styled from 'styled-components'

export const InputSyles = styled.fieldset`
	font-size: 12px;
	margin: 0 auto;
	position: relative;
	padding: 0;

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
		font-size: 12px;
		transition: 0.3s all ease;
		padding: 16px;
		border-radius: 6px;
		border: solid 1px #c4c4c4;
		width: 100%;
		max-width: calc(439px - 16px * 2);
	}

	input:focus + label {
		top: 5px;
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

	.open-dropdown ~ button {
		margin-top: 7rem;
	}
`
