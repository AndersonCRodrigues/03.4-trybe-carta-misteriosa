const input = document.querySelector('#carta-texto');
const criaCartaBtn = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const arrayCalss = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

function killspan() {
  let child = cartaGerada.firstChild;
  while (child) {
    cartaGerada.removeChild(child);
    child = cartaGerada.firstChild;
  }
}

function addClassRandom() {
  const num = Math.floor(Math.random() * (arrayCalss.length));
  return arrayCalss[num];
}

function erro() {
  cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
}

criaCartaBtn.addEventListener('click', () => {
  killspan();
  if (input.value === '' || input.value === ' ') {
    erro();
    return;
  } cartaGerada.innerText = '';
  const string = input.value;
  const arrayString = string.split(' ');
  for (let i = 0; i < arrayString.length; i += 1) {
    const span = document.createElement('span');
    span.classList = addClassRandom();
    span.innerText = arrayString[i];
    cartaGerada.appendChild(span);
  }
});
