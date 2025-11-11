import { styles } from "./auto-complete.styles";

export class AutoComplete extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `
        <style>
            ${styles}
        </style>
        <input placeholder="Digite algo..." />
        `;
    }
}