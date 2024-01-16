class Restaurant {
    #name
    #description
    #location

    constructor(name, description = '', location = new Coordinate(0, 0)) {

        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException();

        // Comprobamos que se cree con el operador new
        if (!(new.target === Restaurant)) throw new InvalidConstructorException();

        this.#name = name;
        this.#description = description;
        this.#location = location;
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

    getLocation() {
        return this.#location;
    }

    setLocation(newLocation) {
        this.#location = newLocation;
    }

    toString() {
        return `Restaurant: ${this.#name}, Description: ${this.#description}, Location: ${this.#location.toString()}`;
    }
}