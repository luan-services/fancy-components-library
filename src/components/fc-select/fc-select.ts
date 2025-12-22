import { template } from './fc-select.template';
// v1.0.0

export class FcSelect extends HTMLElement {

    /* this is the class constructor, whenever you create a new element on js or at the dom, this will be called */
    constructor() {
        super(); // calls HTMLElement class constructor too, after that, runs the following code V
        const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true}); // creates a shadow DOM
        shadow.appendChild(
            template.content.cloneNode(true) // clone our html and css template and append it to the shadow DOM
        ); 
    }
}