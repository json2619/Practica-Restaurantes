const RestaurantsManager = (function () {
    // Creamos la instace de nuestro patron Singleton
    let instance;

    // Creamos el objeto RestaurantsManager
    class RestaurantsManager {
        // Creamos las variables privadas de nuestra clase
        #name;
        #categories = new Map();
        #allergens = new Map();
        #dishes = new Map();
        #menus = new Map();
        #restaurants = new Map();

        constructor(name = "Restaurant Manager") {
            this.#name = name;
        }

        etCategories() {
            return this.#categories[Symbol.iterator]();
        }

        getMenus() {
            return this.#menus[Symbol.iterator]();
        }

        getAllergens() {
            return this.#allergens[Symbol.iterator]();
        }

        getRestaurants() {
            return this.#restaurants[Symbol.iterator]();
        }

        addCategory(category) {
            if (!(category instanceof Category)) throw new InvalidObjectException();

            if (this.#categories.has(category.getName())) throw new RegisteredObjectException();

            this.#categories.set(category.getName(), category);
            return this;
        }

        removeCategory(category) {
            if (!category) {
                throw new EmptyValueException();
            }

            if (!this.#categories.has(category.getName())) {
                throw new NonRegisteredObjectException();
            }


            // Desasignar la categoría de todos los platos
            this.#dishes.forEach(dish => {
                const index = dish.dishCategory.findIndex(cat => cat.getName() === category.getName());
                if (index !== -1) {
                    dish.dishCategory.splice(index, 1);
                }
            });

            // Eliminar la categoría del mapa de categorías
            this.#categories.delete(category.getName());

            return this; // Retornar la instancia para encadenar
        }

        addMenu(menu) {
            if (!menu) {
                throw new EmptyValueException();
            }

            if (this.#menus.has(menu.getName())) {
                throw new RegisteredObjectException();
            }

            this.#menus.set(menu.getName(), {
                newMenu: menu,
                dishMenuArr: [],
            });
            return this;
        }

        removeMenu(menu) {
            if (!this.#menus.has(menu.getName())) {
                throw new NonRegisteredObjectException();
            }

            this.#menus.delete(menu.getName());
            return this;
        }

        addAllergen(allergen) {
            if (!allergen) {
                throw new EmptyValueException();
            }

            if (this.#allergens.has(allergen.getName())) {
                throw new RegisteredObjectException();
            }

            this.#allergens.set(allergen.getName(), allergen);
            return this;
        }

        removeAllergen(allergen) {
            if (!allergen) {
                throw new EmptyValueException();
            }

            if (!this.#allergens.has(allergen.getName())) {
                throw new NonRegisteredObjectException();
            }

            // Desasignar el alérgeno de todos los platos
            this.#dishes.forEach(dish => {
                const index = dish.dishAllergens.findIndex(alg => alg.getName() === allergen.getName());
                if (index !== -1) {
                    dish.dishAllergens.splice(index, 1);
                }
            });

            // Eliminar el alérgeno del mapa de alérgenos
            this.#allergens.delete(allergen.getName());

            return this; // Retornar la instancia para encadenar
        }

        addDish(dish) {
            if (!dish) {
                throw new EmptyValueException();
            }

            if (this.#dishes.has(dish.getName())) {
                throw new RegisteredObjectException();
            }

            this.#dishes.set(dish.getName(), {
                newDish: dish,
                dishCategory: [],
                dishAllergens: [],
            });
            return this;
        }

        removeDish(dish) {
            if (!dish) {
                throw new EmptyValueException();
            }

            if (!this.#dishes.has(dish.getName())) {
                throw new NonRegisteredObjectException();
            }

            this.#dishes.delete(dish.getName());
            return this;
        }

        addRestaurant(restaurant) {
            if (!restaurant) {
                throw new EmptyValueException();
            }

            if (this.#restaurants.has(restaurant.getName())) {
                throw new RegisteredObjectException();
            }

            this.#restaurants.set(restaurant.getName(), restaurant);
            return this;
        }

        removeRestaurant(restaurant) {
            if (!this.#restaurants.has(restaurant.getName())) {
                throw new Error('El restaurante no está registrado.');
            }

            this.#restaurants.delete(restaurant.getName());
            return this;
        }

        assignCategoryToDish(category, dish) {
            // Verificar si la categoría y el plato son objetos válidos
            if (!category || !dish) {
                throw new EmptyValueException();
            }

            // Verificar si la categoría y el plato existen en el sistema
            if (this.#categories.has(category.getName())) {

                if (this.#dishes.has(dish.getName())) {
                    // Obtener la categoría existente y el plato existente
                    const actualDish = this.#dishes.get(dish.getName());

                    // Actualizar la información del plato en el mapa de platos
                    actualDish.dishCategory.push(category);

                }

            } else {
                this.addCategory(category);
                this.addDish(dish);
                // Agregar la categoría al array de categorías del plato
                this.#dishes.get(dish.getName()).dishCategory.push(category);
            }

            return this;
        }

        deassingCategoryFromDish(category, dish) {
            // Verificar si la categoría y el plato son objetos válidos
            if (!category || !dish) {
                throw new EmptyValueException();
            }

            // Obtener el objeto del plato
            if (this.#categories.has(category.getName()) && this.#dishes.has(dish.getName())) {
                for (let [name, value] of this.#dishes) {

                    let pos = value.dishCategory.findIndex((element) => element.getName() === category.getName());

                    if (pos !== -1) {
                        value.dishCategory.splice(pos, 1);
                        break; // Si se encuentra, salimos del bucle externo
                    }
                }

            }

            return this;
        }

    }

    // Función con la que crearemos la instancia 
    // de nuestro patrón Singleton
    function createInstance() {
        const restaurantManager = new RestaurantsManager();
        return restaurantManager;
    }

    return {
        getInstance: function () {
            // Si la instacia no existe llamamos a nuestra función de creación
            if (!instance) {
                instance = createInstance();
            }

            // Retornamos la instancia de nuestro patrón
            return instance;
        }
    }
})();