/*  this index.ts will be the main source for the components, it must import each define method from each individual
component folder (index.ts), and re-exports it

it also creates a defineAll(); function, which lets the user define all components at once */

import { defineAutoComplete } from "./components/auto-complete/index";
import { defineButton } from "./components/button/index";

export { defineAutoComplete, defineButton }

export const defineAll = () => {
    defineAutoComplete();
    defineButton();
}