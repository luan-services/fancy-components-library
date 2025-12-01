import { FcError } from "./fc-error"; // import autoComplete Class

export { FcError };

export const defineError = () => {
    if (!customElements.get("fc-error")) { // prevent browser error if the user calls this function more than once
        customElements.define("fc-error", FcError); // register the element on the browser to use as <fc-Error> 
    }
    return FcError; /* enable to make an instance of the component with 'const fc = new FCError();' and send it to the
    html page with with document.appendChild(); */
}