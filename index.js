module.exports.cardValidator = function
cardValidator(number) {
  let array = [];
  let arrCalculado = [];
  let arrValores = [];
  let indiceImpar, somaValorPar, primeiroDigito, segundoDigito, soma = 0;
  if (number === "") {
    throw TypeError("Digite um numero de cartão");
  }
  if (isNaN(number) == true) {
    throw TypeError("Valor invalido");
  }
  if (number.length < 16) {
    throw TypeError("Numero de cartao invalido");
  }
  for (var i = 0; i < number.length; i++) {
    array.push(number[i]);
  }
  array.reverse();

  arrValores = manipularValores();

  for (var k = 0; k < arrValores.length; k++) {
    soma += parseInt(arrValores[k]);
  }

  var digitoValido = soma % 10;
  if (digitoValido === 0) {
    return true;
  } else {
    return false;
  }
  function manipularValores() {
    array.map((numero, indice) => {
      if ([indice] % 2 !== 0) {
        indiceImpar = numero * 2;
        if (indiceImpar >= 10) {
          primeiroDigito = parseInt(indiceImpar.toString().slice(0, 1));
          segundoDigito = parseInt(indiceImpar.toString().slice(1, 2));
          somaValorPar = primeiroDigito + segundoDigito;
          arrCalculado.push(somaValorPar);
        } else {
          arrCalculado.push(numero * 2);
        }
      } else {
        somaValorPar = numero;
        arrCalculado.push(somaValorPar);
      }
    });
    return arrCalculado;
  }
}
