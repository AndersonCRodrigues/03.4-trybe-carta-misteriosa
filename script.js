const input = document.querySelector('#carta-texto');
const criaCartaBtn = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');

function killspan() {
  let child = cartaGerada.firstChild;
  while (child) {
    cartaGerada.removeChild(child);
    child = cartaGerada.firstChild;
  }
}

criaCartaBtn.addEventListener('click', () => {
  killspan();
  const string = input.value;
  const arrayString = string.split(' ');
  for (let i = 0; i < arrayString.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = arrayString[i];
    cartaGerada.appendChild(span);
  } // input.value = null;
});
