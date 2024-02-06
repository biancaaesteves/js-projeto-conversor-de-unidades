//* Selecionar os elementos

const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn'); // quem faz a ação de converter
const messageElement = document.querySelector('#message');

//* Função para converter as unidades:

function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if(fromValue === toValue) {  // conversão de tipos iguais 
    outputElement.value = inputElement.value;
    messageElement.textContent = ""; // limpar pq não precisa repetir que são iguais
    return
  }

  //* Converter a entrada para metros

  let meters
  switch(fromValue) {
    case 'km':
      meters = inputElement.value * 1000
      break;
    case 'hm':
      meters = input.value  * 100
      break;
    case 'dam':
        meters = input.value * 10
    case 'm':
      meters = inputElement.value
      break;
    case 'dm':
      meters = inputElement.value / 10
      break;
    case 'cm':
        meters = inputElement.value / 100
        break;
    case "mm":
        meters = inputElement.value / 1000
        break;
  }


  //* Converter metros para unidade de saída :

  let result
  switch(toValue) {
    case 'km':
      result = meters / 1000
      break;
    case 'hm':
      result = meters / 100
      break;
    case 'dam':
      result = meters / 10
    case 'm':
      result = meters
      break;
    case 'dm':
      result =  meters * 10
      break;
    case 'cm':
      result = meters * 100
        break;
    case "mm":
      result = meters * 1000
        break;
  }

  //* Exibir resultado no input 

  outputElement.value = result;

    //* Exibir resultado na mensagem 

  const fromLabel = fromElement.options[fromElement.selectedIndex].text // pega o que está selecionado
  const toLabel = toElement.options[toElement.selectedIndex].text // pega o que está selecionado

  const message = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`;
  messageElement.textContent = message;

  return
}

convertButton.addEventListener('click', convert);

