//Utiliza principio de resposablidad unica (Single Responsability Principle)

class Request {
    constructor(url) {
        this.url = url;
    }

    async get() {
        const response = await fetch(this.url);
        const json = await response.json();
        return json;
    }
}

class DomPrinter {
    constructor(element) {
        this.element = element;
    }

    print(data) {
        this.element.innerHTML = data;
    }

    clear(){
        this.element.innerHTML = '';
    }
}

export {
    Request, DomPrinter
}