console.log("carregou arquivo"); 

const botao = document.getElementById("meuBotao"); //pega o botão
botao.addEventListener("click", function (event) { //clica no botao 
    event.preventDefault(); 
    console.log("clicou botao");
    exibirDigito();


})

function exibirDigito() {
    console.log("chamou a funcao exibir digito"); 

    /*const inputElemento = document.getElementById("meuInput"); 
    const userNum = inputElemento.value; 
    const resultadoElemento = document.getElementById("resultado");

    resultadoElemento.textContent = userNum;*/ 
}




/* CODIGO JOSI 
const userNum = document.getElementById("userNum"); //pega o input 
const botao = document.getElementById("meuBotao"); //pega o botão

botao.addEventListener("click", function (event) {
    event.preventDefault(); 
    if (userNum.value === ""){
        return document.getElementById("resultado").innerHTML = "Digite o número do cartão";
    }
    const vlr = userNum.value; //pega o botao 
    //const maskedNumbers = validator.maskify(vlr); //guarda os números mascarados
    if (validator.isValid(vlr)) { //funçao de validar 
        return document.getElementById("resultado").innerHTML = maskedNumbers + " é um cartão válido.";
    }
    return document.getElementById("resultado").innerHTML = "Esse cartão não é válido.";
})

botao.addEventListener("click", function zerarInput(){
    document.getElementById("userNum").value = ""; 
})
*/