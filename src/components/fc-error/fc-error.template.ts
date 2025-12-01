import { styles } from "./fc-error.styles";

export const template = document.createElement('template');

template.innerHTML = `
    <style>${styles}</style>
    <div class="fc-error-text" part="text" aria-live="polite">
    </div>
`;