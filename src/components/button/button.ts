import { styles } from "./button.styles";

export class Button extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot!.innerHTML = `
		<style>
			${styles}
		</style>
		<button>Botão</button>
		`;
	}
}
