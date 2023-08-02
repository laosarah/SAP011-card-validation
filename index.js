import validator from './validator.js';

console.log("carregou arquivo")
const numInput = document.getElementById("meuInput"); //variavel numImput pega o elemento input 
const botao = document.getElementById("meuBotao"); //variavel botao pega o elemento botão

botao.addEventListener("click", function (event) {
  event.preventDefault(); //
  console.log("cliclou botao")
  console.log("digite o numero do cartão")
  if (numInput.value === "") { //se minha variavel numInput tiver o valor identico a vazio retorne a mensagem  
    return document.getElementById("resultado").innerHTML = "Digite o número do cartão."; //mensagem.
  }
  const valor = numInput.value; //variavel valor recebe o valor da variavel numInput 
  if (numInput.value.length !== 16) {
    return document.getElementById("resultado").innerHTML = "Cartão de Crédito precisa ter 16 dígitos."
  }
  console.log("só aceitar 16 caracteres")
  if (isNaN(numInput.value)) {
    return document.getElementById("resultado").innerHTML = "Caracteres invalidos, usar apenas números."
  }
  console.log("pegou o número")
  if (validator.isValid(valor)) { // se a função isValid do objeto validator for verdadeiro execute bloco de código  
    const maskedNumbers = validator.maskify(valor); //chama a função maskify do objeto validator e armazena o resultado na const maskedNumber
    return document.getElementById("resultado").innerHTML = maskedNumbers + " é um cartão válido."; //se o valor que passou na função isValid for valido retorne a mensagem : variavel maskedNumber concatenado com string 
  }
  console.log("devolve valido ou não valido")
  return document.getElementById("resultado").innerHTML = "Esse cartão não é válido, tente novamente."; //senão retorna mensagem não válido.
})


botao.addEventListener("click", function zerarInput() { //zera o input quando o botao é clicado 
  document.getElementById("meuInput").value = ""; // pega o valor do elemento input e faz ele ficar vazio? 
})

console.log(validator);


/* numero cartão válido para test: 3379513561108795 */