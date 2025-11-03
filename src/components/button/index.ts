import { Button } from "./button";

export { Button };

export function defineButton() {
    if (!customElements.get("my-button")) {
		customElements.define("my-button", Button);
	}
}
