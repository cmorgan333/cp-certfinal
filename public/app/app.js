var RECIPES = [
    {
        recipeTitle: "Supreme Pizza",
        recipeThumbImg: "pizzathumb_300x263.jpg", 
        recipeFullImg: "recipe-pizza.jpg",
        recipeBriefDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
    {
        recipeTitle: "Supreme Pizza",
        recipeThumbImg: "pizzathumb_300x263.jpg", 
        recipeFullImg: "recipe-pizza.jpg",
        recipeBriefDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
    {
        recipeTitle: "Supreme Pizza",
        recipeThumbImg: "pizzathumb_300x263.jpg", 
        recipeFullImg: "recipe-pizza.jpg",
        recipeBriefDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
    {
        recipeTitle: "Supreme Pizza",
        recipeThumbImg: "pizzathumb_300x263.jpg", 
        recipeFullImg: "recipe-pizza.jpg",
        recipeBriefDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    }
]


function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

MODEL.updateView(pageID)
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}



$(document).ready(function() {
    initURLListener();
});