import { styles } from './fc-combobox.styles'; // import all the css styles from the stylesheeet

export const template = document.createElement('template'); // create a new component template that will be put in the shadow DOM

/* inside this template, class here can be only controlled by the DEV, more specifically, by the styles at the fc-autcomplete.styles.ts 
   file, if a user do .fc-label it wont work, they need to do .fc-label::part(label) 
*/

/* both input and div must have unique ids, but we cant add directly here, because if the user wants more than one element, it will
get in conflict, we'll be removing the id from here and passing it on the class. */

template.innerHTML = `
	<style>${styles}</style>

	<input 
		class="fc-input"
		type="text" 
		role="combobox"
		aria-autocomplete="list"
		aria-expanded="false"
		aria-haspopup="listbox"
		aria-controls="fc-options"
		part="input"
		autocomplete="off"
	/>

	<div 
		part="options" 
		class="fc-options" 
		role="listbox"
		hidden
	>
		<slot></slot>
	</div>
	
`;