import styled from 'styled-components';

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;

	.close {
		position: absolute;
		top: 1em;
		right: 1em;
		background-color: var(--dark-100);
		width: 2em;
		height: 2em;
		border: none;
		border-radius: 50%;
		color: var(--white);
		font-size: 1em;
		font-weight: bold;
		cursor: pointer;

		&:hover {
			background-color: var(--dark-200);
		}
	}

	.modal {
		display: flex;
		background-color: var(--dark-100);
		box-shadow: 0 1em 1em -0.5em #0008;
		border-radius: 1em;
		max-height: 35em;
		width: 90%;
		max-width: 60em;
		overflow: hidden;
		position: relative;
	}

	.modal__img {
		flex: 2;
		width: 40em;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}

	.modal__info {
		flex: 3;
		display: flex;
		flex-direction: column;
		padding: 1em 2em 1.5em;
	}

	.movie__title {
		font-style: italic;
		margin-bottom: 0.3em;
		padding-right: 1em;
	}

	.movie__data {
		display: flex;
		list-style: none;
		border-bottom: 1px solid var(--primary);
		margin-bottom: 2em;
		padding-bottom: 2em;

		li {
			display: flex;
			align-items: center;
			margin-right: 2em;
			position: relative;
			font-size: 0.9em;

			&:last-child {
				svg {
					color: gold;
				}
			}

			svg {
				margin-right: 0.5em;
			}

			a {
				text-decoration: none;
				color: var(--primary);

				&:hover {
					color: var(--secondary);
				}
			}

			&::after {
				content: '\\00B7';
				position: absolute;
				right: -1em;
			}
		}

		li:last-child {
			margin-right: 0;

			&::after {
				display: none;
			}
		}
	}

	.modal__scroll {
		color: #999;
		overflow-y: scroll;
		height: 15em;
		padding-right: 1em;
		margin-bottom: 2em;

		p {
			margin-bottom: 1em;
			display: flex;
			flex-wrap: wrap;

			&:last-child {
				margin-bottom: 0;
			}
		}

		span {
			text-decoration: none;
			background-color: var(--primary);
			color: var(--dark-100);
			font-weight: 700;
			font-size: 0.6em;
			text-transform: uppercase;
			padding: 0.5em 1em;
			margin-left: 0.75em;
			margin-bottom: 0.75em;
			border-radius: 0.5em;
		}
	}

	.modal__buttons {
		margin-top: auto;

		button {
			all: unset;
			color: var(--dark-100);
			background-color: var(--primary);
			padding: 1em 1.5em;
			font-size: 0.7em;
			text-transform: uppercase;
			font-weight: 700;
			border-radius: 0.75em;
			user-select: none;
			cursor: pointer;
			transition: background-color 300ms ease;
			margin-right: 2em;
			margin-bottom: 1em;
			display: inline-flex;

			&:hover {
				background-color: var(--primary-light);
			}

			&:active {
				transform: scale(0.95);
			}

			svg {
				font-size: 1.4em;
				margin-right: 0.5em;
			}
		}

		button:last-child {
			background-color: var(--secondary);
			color: var(--white);

			&:hover {
				background-color: var(--secondary-light);
			}
		}
	}

	@media (max-width: 550px) {
		.modal {
			flex-direction: column;
			max-height: 90%;
			overflow-y: scroll;
		}

		.modal__img {
			width: 100%;
			height: 15em;
			overflow: visible;
			img {
				/* object-fit: contain; */
			}
		}

		.movie__title {
			font-size: 1.5em;
		}

		.modal__scroll {
			overflow-y: auto;
			height: auto;
		}
	}
`;
