// every element must have box-sizing border box as a pattern (element dimensions will be correctly set)
export const styles = `
	:host {
		display: block;
		width: 100%;
		box-sizing: border-box;
    	font-family: var(--fc-font-family);
	}

	:host([disabled]) {
        cursor: not-allowed;
    }
		

`;
