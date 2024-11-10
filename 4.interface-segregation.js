//Principio de segregacion de interfaz (Interface segregation Principle), 
//  establece que una interfaz no debe obligar a los clientes a depender de métodos que no utilizan. 
//  Es decir, las interfaces deben ser pequeñas y específicas para cada tipo de cliente en lugar de grandes y generales.

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
    constructor() {
        // No respeta principio de inversión de dependencias 
        //    (Todos los modulos de bajo o alto nivel no deben depender de modulos de bajo nivel, 
        //    ambos deben depender de abstracciones, el modulo de bajo nivel no esta relacionado a la logica del negocio, 
        //    ejemplo consulta a BD)
        this.color = new Color();
        this.bold = new Bold();
        this.border = new Border();
    }

    changeColor(color, element) {
        this.color.changeColor(color, element);
    }

    applyBold(element) {
        this.bold.applyBold(element);
    }
 
    applyBorder(element) {
        this.border.applyBorder(element);
    }

    resetTitle(element) {
        this.color.resetColor(element);
        this.bold.applyNormal(element)
        this.border.resetBorder(element);
    }
}

export {
    TitleStyle
}