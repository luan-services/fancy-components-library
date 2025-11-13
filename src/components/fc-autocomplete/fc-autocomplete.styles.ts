export const styles = `
	:host {
		display: block;
		position: relative;
		width: 100%;
		max-width: var(--fc-max-width, 400px);
		box-sizing: border-box;
		font-family: var(--fc-font, sans-serif);
	}

	.fc-input {	
		width: 100%;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--fc-border-color, #ccc);
		border-radius: var(--fc-border-radius, 4px);
		font-size: 1rem;
		box-sizing: border-box;
	}

	.fc-options {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 10;
		background: var(--fc-bg, #fff);
		border: 1px solid var(--fc-border-color, #ccc);
		border-radius: var(--fc-border-radius, 4px);
		margin-top: 4px;
		box-shadow: 0 2px 6px rgba(0,0,0,0.1);
		max-height: 250px;
		overflow-y: auto;
	}
`;
