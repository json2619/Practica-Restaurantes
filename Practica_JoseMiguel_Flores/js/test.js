function test() {

    try {

        // Crear una instancia de RestaurantsManager
        const manager = RestaurantsManager.getInstance();

        // Crear al menos dos objetos de cada tipo
        const category1 = manager.createCategory('Category1', 'Description 1');
        const category2 = manager.createCategory('Category2', 'Description 2');

        const allergen1 = manager.createAllergen('Allergen1', 'Description 1');
        const allergen2 = manager.createAllergen('Allergen2', 'Description 2');

        const dish1 = manager.createDish('Dish1', 'Description 1', 'ingredient1, ingredient2');
        const dish2 = manager.createDish('Dish2', 'Description 2', 'Ingredient3,  Ingredient4');

        const menu1 = manager.createMenu('Menu1', 'Menu Description 1');
        const menu2 = manager.createMenu('Menu2', 'Menu Description 2');

        const restaurant1 = manager.createRestaurant('Restaurant1', 'Restaurant Description 1', new Coordinate(162, 120));
        const restaurant2 = manager.createRestaurant('Restaurant2', 'Restaurant Description 2', new Coordinate(138, 159));

        // Ejecutar métodos de prueba
        manager.addCategory(category1).addCategory(category2)
            .removeCategory(category1).addMenu(menu1).addMenu(menu2)
            .removeMenu(menu1).addAllergen(allergen1).addAllergen(allergen2)
            .removeAllergen(allergen1).addDish(dish1).addDish(dish2)
            .removeDish(dish1).addRestaurant(restaurant1).addRestaurant(restaurant2)
            .removeRestaurant(restaurant1);

        console.log("Prueba de si añade bien las categorias, menus, platos y restaurantes. Postriormente se borran");
        const categoriesIterator1 = manager.getCategories();
        for (const [name, value] of categoriesIterator1) {
            console.log(value.toString());
        }

        const menusIterator1 = manager.getMenus();
        for (const [name, value] of menusIterator1) {
            console.log(value.newMenu.toString());
        }

        const allergensIterator1 = manager.getAllergens();
        for (const [name, value] of allergensIterator1) {
            console.log(value.toString());
        }

        const restaurantsIterator1 = manager.getRestaurants();
        for (const [name, value] of restaurantsIterator1) {
            console.log(value.toString());
        }

        console.log("----------------------------------");

        manager.assignCategoryToDish(category1, dish1);
        manager.assignAllergenToDish(allergen1, dish1);
        manager.assignAllergenToDish(allergen1, dish2)
        manager.assignDishToMenu(menu1, dish1);
        manager.changeDishesPositionsInMenu(menu1, dish1, dish2);

        // Pruebas de los métodos get
        const categoriesIterator = manager.getCategories();
        for (const [name, value] of categoriesIterator) {
            console.log(value.toString());
        }

        const menusIterator = manager.getMenus();
        for (const [name, value] of menusIterator) {
            console.log(value.newMenu.toString());
        }

        const allergensIterator = manager.getAllergens();
        for (const [name, value] of allergensIterator) {
            console.log(value.toString());
        }

        const restaurantsIterator = manager.getRestaurants();
        for (const [name, value] of restaurantsIterator) {
            console.log(value.toString());
        }

        console.log("----------------------------------");

        console.log("Platos que tienen una categoría determinada");
        const dishCategoryIterator = manager.getDishesInCategory(category1);
        for (const value of dishCategoryIterator) {
            console.log(value.toString());
        }
        console.log("Platos que tienen un alérgeno determinado");
        const dishAllergenIterator = manager.getDishesWithAllergen(allergen1);
        for (const value of dishAllergenIterator) {
            console.log(value.toString());
        }

        console.log("Pruebas exitosas.");
    } catch (error) {
        console.error("Error:", error.message);
    }

}

// Ejecutar la función de prueba
test();