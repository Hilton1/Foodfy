const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
  recipe.addEventListener('click', () => {
    window.location.href = `/recipes/${recipe.getAttribute('id')}`
  });
}

function hideShow(content, button) {
  const display = document.querySelector(content).style.display;

  if (display == "none") {
    document.querySelector(content).style.display = 'block';
    document.querySelector(button).innerHTML = "ESCONDER";
  } else {
    document.querySelector(content).style.display = 'none';
    document.querySelector(button).innerHTML = "MOSTRAR";
  }
}