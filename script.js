const input = document.querySelector('#carta-texto');
const criaCartaBtn = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function addRamdomClass() {
  const arrayRandomClass = [];
  arrayRandomClass.push(estilo[(Math.floor(Math.random() * (estilo.length)))]);
  arrayRandomClass.push(tamanho[(Math.floor(Math.random() * (tamanho.length)))]);
  arrayRandomClass.push(rotacao[(Math.floor(Math.random() * (rotacao.length)))]);
  arrayRandomClass.push(inclinacao[(Math.floor(Math.random() * (inclinacao.length)))]);
  return arrayRandomClass;
}

function erro() {
  cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
}

function contaString(num) {
  contador.innerText = num;
}

criaCartaBtn.addEventListener('click', () => {
  if (!input.value.trim()) {
    erro();
    return;
  } cartaGerada.innerText = '';
  const string = input.value;
  const arrayString = string.split(' ');
  contaString(arrayString.length);
  for (let i = 0; i < arrayString.length; i += 1) {
    const span = document.createElement('span');
    span.classList = addRamdomClass().join(' ');
    span.innerText = arrayString[i];
    cartaGerada.appendChild(span);
  }
});

cartaGerada.addEventListener('click', (origin) => {
  const event = origin.target;
  event.classList = addRamdomClass().join(' ');
});
