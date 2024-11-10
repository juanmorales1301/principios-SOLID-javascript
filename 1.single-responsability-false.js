//No utiliza principio de resposablidad unica (Single Responsability Principle)

class A {
    constructor(url, element) {
        this.url = url;
        this.element = element;
        console.log(this.url, this.element);
    }

    async get() {
        const response = await fetch(this.url);
        const json = await response.json();
        return json;
    }

    print(data) {
        this.element.innerHTML = data;
    }
}

(async () => {
    const objA = new A('https://pokeapi.co/api/v2/pokemon/ditto', document.getElementById("data"));

    //Imprime datos en pantalla
    objA.print("Hola mundo");

    //Obtiene pagina
    const pag = await objA.get();
    console.log(pag)

})()

export {
    A
}