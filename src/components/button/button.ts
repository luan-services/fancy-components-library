export class Button extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot!.innerHTML = `
		<style>
			button {
			padding: 8px 12px;
			background-color: #6200ee;
			color: white;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			}
		</style>
		<button>Botão</button>
		`;
	}
}
