const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', pressKey);

// funções
function handleTryClick(event) {
  event.preventDefault(); // significa 'não faça o padrão'.

  const inputNumber = document.querySelector("#inputNumber"); /* essa linha serve da seguinte forma: pegue no documento(documente) a pesquisa no seletor(querySelector) de id(#inputNumber),  */
  
  if(Number(inputNumber.value) == randomNumber) { /* .value faz com que o js pegue o valor que foi colocado no inputNumber */
    toggleScreen();
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas! ` // innerText é feito para alterar o texto
  }; 

  inputNumber.value = "";
  xAttempts++;
};

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
};

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function pressKey(e) {
  if((e.key == 'Enter') && (screen1.classList.contains('hide'))) {
    handleResetClick()
  };
}