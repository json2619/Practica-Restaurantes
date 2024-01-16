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