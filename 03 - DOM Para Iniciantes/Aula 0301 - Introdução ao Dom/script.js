const href = window.location.href;

console.log(href);

if (
  href ===
  'http://127.0.0.1:5500/Introdu%C3%A7%C3%A3o/dom-para-iniciantes/o-que-e-o-dom/index.html'
) {
  console.log('É igual');
} else {
  console.log('É diferente');
}

const h1selecionado = document.querySelector('h1');
const h1Classes = h1selecionado.classList;

function callBackh1() {
  console.log('Clicou em ', h1selecionado);
}
h1selecionado.addEventListener('click', callBackh1);

console.log(window);
