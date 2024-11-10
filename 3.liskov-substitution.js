//Principio de sustitución de liskov (Liskov sustitution principle)

import { DomPrinter } from './1.single-responsability-true.js'

class DomFormaterPrinterLiskov extends DomPrinter {
    constructor(element, formatter) {
        super(element);
        this.formatter = formatter;
    }

    print(data) {
        const text = data.abilities.reduce(this.formatter, '');
        super.print(text);
    }

    clear(){
        //super.clear();                // Tambien cumple con principio de sustitucion de liskov, porque realiza la accion nombrada
        this.element.innerHTML = "";    // Cumple con principio de sustitucion de liskov, porque realiza la accion nombrada
    }
}

export {
    DomFormaterPrinterLiskov
}