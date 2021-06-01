import styled from 'styled-components'

export const DropDown = styled.div`
	.custom-select__trigger,
	.custom-option {
		position: relative;
		cursor: pointer;
		padding: 16px;
	}
	
	.custom-select__trigger {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-transform: capitalize;
		color: #c4c4c4;
	}
	
	.custom-select__trigger.focus {
		color: #34394f;
	}

	.custom-option {
		display: block;
		font-size: 16px;
	  font-weight: normal;
  	font-stretch: normal;
  	font-style: normal;
  	line-height: 1.63;
		letter-spacing: -0.52px;
		text-align: left;
		transition: all 0.5s;
		border-radius: 5px;
    margin-inline: 8px;
    margin-block: 8px;
		color: #34394f;
	}
	.custom-option:hover {
		cursor: pointer;
		color: #34394f;
		font-weight: 500;
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
		left: 3px;
		transform: rotate(45deg);
		background-color: #c4c4c4;
	}
	.open .arrow::before {
		left: -3px;
		transform: rotate(45deg);
	}
	.open .arrow::after {
		left: 3px;
		transform: rotate(-45deg);
	}
`

export const FieldsetStyles = styled.fieldset`
	border-radius: 5px;
	border: solid 2px #c4c4c4;
	max-width: 436px;
	padding: 0;
	margin: 0 0 16px 0;
	&.focus {
		border: solid 2px #34394f;

		.arrow::before {
			background-color: #34394f;
		}
		.arrow::after {
			background-color: #34394f;
		}
	}
`
