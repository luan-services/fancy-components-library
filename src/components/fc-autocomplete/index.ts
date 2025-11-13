import { FcAutoComplete } from "./fc-autocomplete";

export { FcAutoComplete };

export const defineAutoComplete = () => {
  if (!customElements.get("fc-autocomplete")) {
    customElements.define("fc-autocomplete", FcAutoComplete);
  }
  return FcAutoComplete;
};
