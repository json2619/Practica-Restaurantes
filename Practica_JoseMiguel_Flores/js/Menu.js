class Menu {
    #name
    #description

    constructor(name, description = '') {

        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException();

        // Comprobamos que se cree con el operador new
        if (!(new.target === Menu)) throw new InvalidConstructorException();

        this.#name = name;
        this.#description = description;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }

    getDescription() {
        return this.#description;
    }

    setDescription(newDescription) {
        this.#description = newDescription;
    }

    toString() {
        return `Menu: ${this.#name}, Description: ${this.#description}`;
    }
}