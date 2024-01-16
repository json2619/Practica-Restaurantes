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