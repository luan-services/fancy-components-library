import { FcSelect } from "./fc-select";

export { FcSelect };

export const defineSelect = () => {
    if (!customElements.get("fc-select")) {
        customElements.define("fc-select", FcSelect);
    }
    return FcSelect;
};
