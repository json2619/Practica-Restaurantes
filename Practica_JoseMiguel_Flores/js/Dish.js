// Objeto Dish
class Dish {
    #name
    #description
    #ingredients
    #image

    constructor(name, description = '', ingredients = '') {

        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException();

        // Comprobamos que se cree con el operador new
        if (!(new.target === Dish)) throw new InvalidConstructorException();

        this.#name = name;
        this.#description = description;
        this.#ingredients = ingredients;
        this.#image = "";
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

    getIngredients() {
        return this.#ingredients;
    }

    setIngredients(newIngredients) {
        this.#ingredients = newIngredients;
    }

    getImage() {
        return this.#image;
    }

    setImage(newImage) {
        this.#image = newImage;
    }

    toString() {
        return `Dish: ${this.#name}, Description: ${this.#description}, Ingredients: ${this.#ingredients}, Image: ${this.#image}`;
    }
}