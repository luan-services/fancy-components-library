export class AutoComplete extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `
        <style>
            input {
            padding: 8px;
            width: 200px;
            border-radius: 4px;
            border: 1px solid #ccc;
            }
        </style>
        <input placeholder="Digite algo..." />
        `;
    }
}
