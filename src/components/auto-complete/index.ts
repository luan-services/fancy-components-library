import { AutoComplete } from "./auto-complete"; // import autoComplete Class

export { AutoComplete };

export const defineAutoComplete = () => {
    if (!customElements.get("auto-complete")) { // prevent browser error if the user calls this function more than once
        customElements.define("auto-complete", AutoComplete); // register the element on the browser to use as <auto-complete> 
    }
    return AutoComplete; /* enable to make an instance of the component with 'const ac = new AutoComplete();' and send it to the
    html page with with document.appendChild(); */
}
