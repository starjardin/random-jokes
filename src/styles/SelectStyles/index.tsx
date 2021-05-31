import styled from 'styled-components'

export const DropDown = styled.div`
	.custom-select__trigger {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		text-transform: capitalize;
		padding: 16px;
		color: #c4c4c4;
	}
	.custom-options {
		display: block;
		top: 100%;
		left: 0;
		right: 0;
		transition: all 0.5s;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		z-index: 2;
	}
	.custom-select.open .custom-options {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
	.custom-option {
		position: relative;
		display: block;
		line-height: 1.63;
		letter-spacing: -0.52px;
		text-align: left;
		cursor: pointer;
		transition: all 0.5s;
		padding: 16px;
		border-radius: 5px;
    margin-inline: 8px;
    margin-block: 13px;
	}
	.custom-option:hover {
		cursor: pointer;
		color: #c4c4c4;
		background-color: #b2b2b2;
	}
	.custom-option:hover {
		background-color: #e9e9e9;
}
	}
	.arrow {
		position: relative;
		height: 10px;
		width: 10px;
	}
	.arrow::before,
	.arrow::after {
		content: "";
		position: absolute;
		bottom: 0px;
		width: 0.1rem;
		height: 100%;
		transition: all 0.5s;
	}
	.arrow::before {
		left: -3px;
		transform: rotate(-45deg);
		background-color: #c4c4c4;
	}
	.arrow::after {
		left: 2px;
		transform: rotate(45deg);
		background-color: #c4c4c4;
	}
	.open .arrow::before {
		left: -3px;
		transform: rotate(45deg);
	}
	.open .arrow::after {
		left: 2px;
		transform: rotate(-45deg);
	}
`

export const FieldsetStyles = styled.fieldset`
	border-radius: 5px;
	border: solid 1px #c4c4c4;
	max-width: 526px;
	padding: 0;
	margin: 0 0 16px 0;
`
