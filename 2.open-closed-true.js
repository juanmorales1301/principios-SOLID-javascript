// Inclusion de principio abierto a extensión cerrado a modificación

import { DomPrinter } from './1.single-responsability-true.js'

class DomFormaterPrinter extends DomPrinter {
    constructor(element) {
        super(element);
    }

    print(data) {
        const text = data.abilities.reduce((ac, e) => ac + `<p>${e.ability.name}</p>`, '');
        super.print(text);
    }

    clear(){
        this.element.innerHTML = "Sin contenido";
    }
}

class DomHtmlPrinter extends DomPrinter {
    constructor(element, formatter) {
        super(element);
        this.formatter = formatter;
    }

    print(data) {
        const text = data.abilities.reduce(this.formatter, '');
        super.print(text);
    }

    clear(){
        return; //No respeta principio de sustitucion de liskov
    }
}

export {
    DomFormaterPrinter,
    DomHtmlPrinter
}