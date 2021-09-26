const modalOverlay = document.querySelector(".modal-overlay");
const recipes = document.querySelectorAll(".recipe");

for (let recipe of recipes) {
  recipe.addEventListener("click", function() {
    const recipeId = recipe.getAttribute("id")
 
    modalOverlay.classList.add("active")
 
    modalOverlay.querySelector("img").src = `assets/${recipeId}.png`
    modalOverlay.querySelector("h1").innerHTML = recipe.querySelector("#recipe_title").innerHTML;
    modalOverlay.querySelector("p").innerHTML = recipe.querySelector("#recipe_author").innerHTML;
  })
}

document.querySelector(".close-modal a").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
})