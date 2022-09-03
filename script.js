const input = document.querySelector('#carta-texto');
const criaCartaBtn = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['newspaper', 'magazine1', 'magazine2'];
const inclinacao = ['rotateleft', 'rotateright'];

function killspan() {
  let child = cartaGerada.firstChild;
  while (child) {
    cartaGerada.removeChild(child);
    child = cartaGerada.firstChild;
  }
}

function addEstilo() {
  const nun = Math.floor(Math.random() * (estilo.length));
  return estilo[nun];
}

function addTamanho() {
  const nun = Math.floor(Math.random() * (tamanho.length));
  return tamanho[nun];
}

function addRotacao() {
  const nun = Math.floor(Math.random() * (rotacao.length));
  return rotacao[nun];
}

function addInclinacao() {
  const nun = Math.floor(Math.random() * (inclinacao.length));
  return inclinacao[nun];
}

function juntaClass() {
  const class1 = addEstilo();
  const class2 = addInclinacao();
  const class3 = addTamanho();
  const class4 = addRotacao();
  return `${class1}, ${class2}, ${class3}, ${class4}`;
}

function erro() {
  cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
}

function contaString(num) {
  contador.innerText = num;
}

criaCartaBtn.addEventListener('click', () => {
  killspan();
  if (input.value === '' || input.value === ' ') {
    erro();
    return;
  } cartaGerada.innerText = '';
  const string = input.value;
  const arrayString = string.split(' ');
  contaString(arrayString.length);
  for (let i = 0; i < arrayString.length; i += 1) {
    const span = document.createElement('span');
    span.classList = juntaClass();
    span.innerText = arrayString[i];
    cartaGerada.appendChild(span);
  }
});

cartaGerada.addEventListener('click', (origin) => {
  const event = origin.target;
  estilo.sort(() => Math.random() - 0.5);
  tamanho.sort(() => Math.random() - 0.5);
  rotacao.sort(() => Math.random() - 0.5);
  inclinacao.sort(() => Math.random() - 0.5);
  event.classList = juntaClass();
});
