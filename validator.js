const validator = { // objeto validator 
  isValid(valor) { // função de validar o número do cartão 
    console.log(valor); //mostra o valor colocado no input 
    const reverse = valor.split('').reverse(); //separa os caracteres indivuais e inverte e ordem (começando de tras para frente)
    let total = 0;

    for (let i = 0; i < reverse.length; i++) { //loop array, até que o indice seja menor que o comprimento da array (acabar os n) 
      let digito = parseInt(reverse[i]);

      if (i % 2 !== 0) { // se a sobra de indice dividido por 2 for (!==) desigual restrito a 0 
        digito *= 2; //digito = digito * 2 
        if (digito > 9) { //se digito maior que 9 
          digito -= 9; // digito = digito - 9 
        }
      }
      total += digito; // total = total + digito 
    }

    return total % 10 === 0; //retorna a sobra de total divido por 10 identico a 0 
  }, 
  
  maskify(valor) { //função de mascarar parte do numero do input
    const nmrMascara = []; // variavel nmrMascara inicia com a array vazia  
    for (let i = 0; i < valor.length; i++) { // loop array igual linha 7 
      if (i < valor.length - 4) { //se indice menor que comprimento da array - 4 (menos os 4 ultimos???)  
        nmrMascara.push("#"); // acrescenta # nos numeros, menos os 4 ultimos? é isso? rs 
      }
      else {
        nmrMascara.push(valor[i]) //senão coloca o valor do input na array 
      }
    }
    const mascara = nmrMascara.join(""); // variavel mascara recebe variavel nmrMascara e método .join('') transformar em uma unica string
    return mascara; // retorna a string resultante que deve ser #### #### #### e 4 ultimos digitos aparentes. 
  }
};
  
export default validator; //exportando resultado para index.js