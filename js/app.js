function checkLogin() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("Vous devez vous connecter !");
      window.location.href = "./../index.html";
    } else {
      const doc = document.getElementById("welcomeMessage");
      console.log(doc);
    }
  }
  
  checkLogin();
  
  const recipes = [
    { name: "Omelette aux tomates", ingredients: ["œufs", "tomates"], steps: "Battez les œufs et ajoutez des tomates." },
    { name: "Salade rapide", ingredients: ["tomates", "fromage"], steps: "Mélangez tomates et fromage, ajoutez de l'huile d'olive." },
    { name: "Soupe de légumes", ingredients: ["carottes", "pommes de terre", "poireaux"], steps: "Faites bouillir les légumes, mixez-les, puis servez." },
    { name: "Pizza maison", ingredients: ["pâte à pizza", "sauce tomate", "fromage"], steps: "Étalez la pâte, ajoutez la sauce tomate et le fromage, puis enfournez." },
    { name: "Smoothie banane", ingredients: ["bananes", "lait"], steps: "Mixez les bananes avec le lait pour obtenir un smoothie." },
    { name: "Pâtes au pesto", ingredients: ["pâtes", "pesto"], steps: "Faites cuire les pâtes, puis ajoutez le pesto." },
    { name: "Tarte aux pommes", ingredients: ["pâte feuilletée", "pommes", "sucre"], steps: "Disposez les pommes sur la pâte, saupoudrez de sucre, puis enfournez." },
    { name: "Gratin dauphinois", ingredients: ["pommes de terre", "crème", "fromage"], steps: "Disposez des tranches de pommes de terre, ajoutez de la crème et du fromage, puis enfournez." },
    { name: "Burger maison", ingredients: ["pain à burger", "steak haché", "salade", "fromage"], steps: "Assemblez le burger avec tous les ingrédients, puis chauffez-le légèrement." },
    { name: "Quiche lorraine", ingredients: ["pâte brisée", "œufs", "crème", "lardons"], steps: "Mélangez les œufs, la crème et les lardons, versez sur la pâte, puis enfournez." },
    { name: "Couscous végétarien", ingredients: ["semoule", "pois chiches", "carottes", "courgettes"], steps: "Faites cuire les légumes, servez-les avec la semoule et les pois chiches." },
    { name: "Cake au chocolat", ingredients: ["chocolat", "farine", "œufs", "beurre"], steps: "Mélangez tous les ingrédients, versez dans un moule, puis enfournez." }
  ];
  
  function suggestRecipe() {
    const input = document.getElementById("ingredients").value.toLowerCase();
    const userIngredients = input.split(",").map((item) => item.trim());
  
    // Trouver toutes les recettes ayant au moins un ingrédient correspondant
    const matchingRecipes = recipes.filter((recipe) =>
      recipe.ingredients.some((ing) => userIngredients.includes(ing))
    );
  
    const recipeDiv = document.getElementById("recipe");
  
    if (matchingRecipes.length > 0) {
      // Sélectionner une recette aléatoire parmi celles trouvées
      const randomRecipe = matchingRecipes[Math.floor(Math.random() * matchingRecipes.length)];
      recipeDiv.innerHTML = `<h3>${randomRecipe.name}</h3><p>${randomRecipe.steps}</p>`;
    } else {
      // Aucune correspondance trouvée, suggérer une recette aléatoire
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      recipeDiv.innerHTML = `<h3>Recette suggérée : ${randomRecipe.name}</h3>
                             <p>Essayez avec les ingrédients suivants : ${randomRecipe.ingredients.join(", ")}</p>
                             <p>${randomRecipe.steps}</p>`;
    }
    document.getElementById("ingredients").value = "";
  }
  
  function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Vous êtes déconnecté !");
    window.location.href = "https://marieconstance.github.io/index.html";
  }
  
  const dec = document.querySelector("#btn");
  dec.addEventListener("click", () => {
    logout();
  });
  