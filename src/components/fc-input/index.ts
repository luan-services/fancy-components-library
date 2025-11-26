import { FcInput } from "./fc-input"; // import input Class

export { FcInput };

export const defineInput = () => {
    if (!customElements.get("fc-input")) { // prevent browser error if the user calls this function more than once
        customElements.define("fc-input", FcInput); // register the element on the browser to use as <fc-input> 
    }
    return FcInput; /* enable to make an instance of the component with 'const fc = new FcInput();' and send it to the
    html page with with document.appendChild(); */
}
