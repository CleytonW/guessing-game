const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// função callback
function handleTryClick(event) {
  event.preventDefault(); // não faça o padrão

  const inputNumber = document.querySelector("#inputNumber"); /* essa linha serve da seguinte forma: pegue no documento(documente) a pesquisa no seletor(querySelector) de id(#inputNumber),  */
  

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide'); // selecionamos no documento o screen1, e com o classList.add, e adicionamos a ele o hide.
    screen2.classList.remove('hide'); // selecionamos no documento o screen1, e com o classList.remove, e removemos o hide.
    
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas! ` // innerText é feito para alterar o texto
  }; /* .value faz com que o js pegue o valor que foi colocado no inputNumber */

  inputNumber.value = "";
  xAttempts++;
};


// Eventos
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function() {
  screen1.classList.remove('hide');
  screen2.classList.add('hide');
  xAttempts = 1;
});