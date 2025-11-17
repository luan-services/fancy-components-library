export const styles = `
	:host {
		display: block;
		position: relative;
		width: 100%;
		box-sizing: border-box;
    	font-family: var(--fc-font-family);
		max-width: var(--fc-autocomplete-max-width);
	}

	.fc-input {
		width: 100%;
		box-sizing: border-box;

		padding: var(--fc-autocomplete-padding);
		border-radius: var(--fc-autocomplete-radius);
		background: var(--fc-autocomplete-bg);
		color: var(--fc-autocomplete-fg);

		border: var(--fc-autocomplete-border-width) solid var(--fc-autocomplete-border);
		font-size: var(--fc-font-size-md);

		box-shadow: var(--fc-autocomplete-shadow);
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	.fc-input::placeholder {
		color: var(--fc-autocomplete-placeholder);
	}

	.fc-input:hover {
		border-color: var(--fc-autocomplete-border-hover);
	}

	.fc-input:focus {
		border-color: var(--fc-autocomplete-border-focus);
		outline: none;
	}

	.fc-options {
		position: absolute;
		top: calc(100% + 4px);
		left: 0;
		right: 0;
		z-index: 10;
		background: var(--fc-autocomplete-dropdown-bg, var(--fc-autocomplete-bg));
		border: var(--fc-autocomplete-border-width) solid var(--fc-autocomplete-border);
		border-radius: var(--fc-autocomplete-dropdown-radius, var(--fc-autocomplete-radius));
		padding: var(--fc-autocomplete-dropdown-padding, calc(var(--fc-autocomplete-padding) - 5px));
		box-shadow: var(--fc-autocomplete-dropdown-shadow);
		max-height: var(--fc-autocomplete-dropdown-max-height, 240px);
		overflow-y: auto;
		box-sizing: border-box;

		/* css for animation */
		overflow: hidden;
		height: 0;
		opacity: 0;
		transform: translateY(-4px) scale(0.97);
		transform-origin: top center;
		pointer-events: none;
	}

	.fc-options[data-state="open"] {
		animation: fc-dropdown-open 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		pointer-events: auto;
	}

	.fc-options[data-state="closing"] {
		animation: fc-dropdown-close 0.15s ease forwards;
	}

		@keyframes fc-dropdown-open {
		from {
			height: 0;
			opacity: 0;
			transform: translateY(-4px) scale(0.95);
		}
		to {
			height: var(--fc-height);
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes fc-dropdown-close {
		from {
			height: var(--fc-height);
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		to {
			height: 0;
			opacity: 0;
			transform: translateY(-4px) scale(0.95);
		}
	}
`;
