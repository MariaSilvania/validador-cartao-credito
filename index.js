function cardValidator(number) {
  let array = [];
  let arrCalculado = [];
  let indiceImpar, somaValorPar, primeiroDigito, segundoDigito, soma = 0;

  if (number === "") {
    throw TypeError("Digite o numero do cartao");
  }
  if (isNaN(number) == true) {
    throw TypeError("Valor invalido");
  }
  if (number.length < 14) {
    throw TypeError("O cartao deve ter mais de 13 digito");
  }
  for (var i = 0; i < number.length; i++) {
    array.push(number[i]);
  }
  array.reverse();
  var valorFuncao = manipularValores();

  for (var k = 0; k < arrCalculado.length; k++) {
    soma += parseInt(arrCalculado[k]);
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
};
module.exports = cardValidator;