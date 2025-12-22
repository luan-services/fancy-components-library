import { styles } from './fc-select.styles'; // import all the css styles from the stylesheeet

export const template = document.createElement('template'); // create a new component template that will be put in the shadow DOM

template.innerHTML = `
    <style>${styles}</style>


    <div 
        part="options" 
        class="fc-options" 
        role="listbox"
        hidden
    >
        <slot></slot>
    </div>
    
`;