import { AutoComplete } from "./auto-complete";

export { AutoComplete };

export function defineAutoComplete() {
    if (!customElements.get("auto-complete")) {
        customElements.define("auto-complete", AutoComplete);
    }
}
