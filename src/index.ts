// re-exporta as funções individuais de componentes
export { defineAutoComplete } from "./components/auto-complete/index";
export { defineButton } from "./components/button/index";

// importa as funções p gerar o defineAll()
import { defineAutoComplete } from "./components/auto-complete/index";
import { defineButton } from "./components/button/index";

// cria a função que exporta todos os componentes
export function defineAll() {
    defineAutoComplete();
    defineButton();
}