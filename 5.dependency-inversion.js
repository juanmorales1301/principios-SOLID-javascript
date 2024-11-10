//Principio de Inversión de Dependencia (Dependency Inversion Principle), establece que
//  Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
//  Las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

class Color {
    changeColor(color, element) {
        element.style.color = color;
    }

    resetColor(element) {
        element.style.color = "black";
    }
}

class Bold {
    applyBold(element) {
        element.style.fontWeight = '800';
    }

    applyNormal(element) {
        element.style.fontWeight = '200';
    }
}

class Border {
    applyBorder(element) {
        element.style.border = '1px solid black';
    }

    resetBorder(element) {
        element.style.border = 'none';
    }
}

class TitleStyle {
    constructor(element, color, bold, border) {
        this.element = element;
        this.color = color;
        this.bold = bold;
        this.border = border;
    }

    changeColor(color) {
        this.color.changeColor(color, this.element);
    }

    applyBold() {
        this.bold.applyBold(this.element);
    }

    applyBorder() {
        this.border.applyBorder(this.element);
    }

    resetTitle() {
        this.color.resetColor(this.element);
        this.bold.applyNormal(this.element)
        this.border.resetBorder(this.element);
    }
}

export {
    TitleStyle,
    Color,
    Bold,
    Border
}