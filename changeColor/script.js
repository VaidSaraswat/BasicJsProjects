const colorBtn =  document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const value = document.querySelector('.hex');

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

colorBtn.addEventListener('click',changeColor);


function changeColor() {
  bodyBcg.style.backgroundColor = randomColor;
  randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  value.innerHTML = randomColor;

}
