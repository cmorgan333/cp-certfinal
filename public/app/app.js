var RECIPES = [
    {
        recipeTitle: "Supreme Pizza",
        recipeThumbImg: "pizzathumb_300x263.jpg", 
        recipeFullImg: "recipe-pizza.jpg",
        recipeBriefDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeDescription:"Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeTime:"1h 24min",
        recipeServings:"4 servings",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
    {
        recipeTitle: "Classic Burger",
        recipeThumbImg: "burgerthumb_300x263.jpg", 
        recipeFullImg: "recipe-burger.jpg",
        recipeBriefDescription:"Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.",
        recipeDescription:"Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
        recipeTime:"30 min",
        recipeServings:"4 servings",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
    {
        recipeTitle: "Chicken Biryani",
        recipeThumbImg: "biryanithumb_300x263.jpg", 
        recipeFullImg: "recipe-pilaf.jpg",
        recipeBriefDescription:"Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.",
        recipeDescription:"Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.",
        recipeTime:"1h 15min",
        recipeServings:"6 servings",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
    {
        recipeTitle: "Ch. Chow Mein",
        recipeThumbImg: "chowmmeinthumb_300x263.jpg", 
        recipeFullImg: "recipe-chowmein.jpg",
        recipeBriefDescription:"A great Chow Mein comes down to the sauce - it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice!",
        recipeDescription:"A great Chow Mein comes down to the sauce - it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice!",
        recipeTime:"20 min",
        recipeServings:"4 servings",
        recipeIngredients: "1/4 batch pizza dough 2 tablespoons Last-Minute Pizza Sauce 10 slices pepperoni 1 cup cooked and crumbled Italian sausage 2 large mushrooms, sliced 1/4 bell pepper, sliced 1 tablespoon sliced black olives 1 cup shredded mozzarella cheese",
        recipeInstructions:"1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper. 2. Flatten dough into a thin round and place on the pizza pan. 3. Spread pizza sauce over the dough. 4. Layer the toppings over the dough in the order listed . 5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    },
];

var userExists = false;

var userFullName = "";

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

MODEL.updateView(pageID)
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListeners() {
    $(".bars").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

$(".links a").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
});
}

// ====OBJECTS====//


// =====STATE CHANGE====//
function initFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
console.log("auth change logged in");
if(user.displayName){
    $(".name").html(user.displayName);
}

$(".view").prop("disabled", false);
userExists = true;
        } else{
            console.log("auth changed logged out");
            $(".name").html("");
            $(".view").prop("disabled", true);
            userExists = false;
            userFullName = "";
        }
    });
}

function signOut() { 
    firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log("Error signing out");
    });
}

// =====LOGIN====//
function login(){
    let loginEmail = $("#loginEmail").val();
    let loginPassword = $("#loginPassword").val();

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    console.log("logged in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("logged in error " + errorMessage);
  });
}

// ===CREATE ACCOUNT====//
function createAccount() {
   
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let createEmail = $("#createEmail").val();
    let createPassword = $("#createPassword").val();
    let fullName = fName + " " + lName;

    console.log("create " + fName + " " + lName + " " + createEmail + " " + createPassword);

    // ===FBASE AUTH USERNAME/PASSWORD//
    firebase.auth().createUserWithEmailAndPassword(createEmail, createPassword)
  .then((userCredential) => {
    var user = userCredential.user;
    // ...
    console.log('created');
    firebase.auth().currentUser.updateProfile({
        displayName: fullName,
    });
    userFullName = fullName;
    $(".name").html(userFullName);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('create error ' + errorMessage);
  });
}

function signIn() {
    firebase.auth().signInAnonymously()
  .then(() => {
    console.log("logged in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error signing in " + errorMessage);
  });
}

// ===DOCUMENT READY===//
$(document).ready(function() {
    try {
        let app = firebase.app();
        initFirebase();
        // signInAnon();
        initListeners();
        initURLListener();
    }catch(error){
        console.log("error ", error);
    }
});