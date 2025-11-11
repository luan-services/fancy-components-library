import { Button } from "./button"; // import button Class

export { Button };

export const defineButton = () => {
	if (!customElements.get("fancy-button")) { // prevent browser error if the user calls this function more than once
		customElements.define("fancy-button", Button); // register the element on the browser to use as <fc-button> 
	}
	return Button; /* enable to make an instance of the component with 'const ac = new Button();' and send it to the
	html page with with document.appendChild(); */
}
