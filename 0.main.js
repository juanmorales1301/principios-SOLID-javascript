//import { A } from './1.single-responsability-false.js';
import { Request } from './1.single-responsability-true.js';
import { DomFormaterPrinter, DomHtmlPrinter } from './2.open-closed-true.js';
import { DomFormaterPrinterLiskov } from './3.liskov-substitution.js';
//import { TitleStyle } from './4.interface-segregation.js';
import { TitleStyle, Color, Bold, Border } from './5.dependency-inversion.js';


class Loader {
    constructor(request, domPrinter) {
        this.request = request;
        this.domPrinter = domPrinter;
    }

    async load() {
        //Obtiene datos pagina
        const data = await this.request.get();

        //Imprime datos en pantalla
        this.domPrinter.print(data);
    }

    clear() {
        this.domPrinter.clear();
    }
}

//Constantes
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const elementData = document.getElementById("data");
const elementTitle = document.getElementById('some');

// Inyección de dependencias
const request = new Request(url);
const domPrinter = new DomFormaterPrinterLiskov(elementData, (ac, e) => {
    return ac + `
        <h4>${e.ability.name}</h4>
        <p>${e.ability.url}</p>
    `
})
const { color, bold, border } = { color: new Color(), bold: new Bold(), border: new Border() }


// Asigna la instancia al objeto global
window.loader = new Loader(request, domPrinter);
window.titleStyle = new TitleStyle(elementTitle, color, bold, border);

//Exporta clases en caso de modulo
export {
    Loader,
    TitleStyle
}

