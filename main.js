function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber"); /* essa linha serve da seguinte forma: pegue no documento(documente) a pesquisa no seletor(querySelector) de id(#inputNumber),  */
  console.log(inputNumber.value);/* .value faz com que o js pegue o valor que foi colocado no inputNumber */
};