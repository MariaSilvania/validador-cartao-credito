module.exports.cardValidator = function
cardValidator(number) {
    // try {
    var array = [];
    var arrCalculado = [];

    if ((number !== "") && (isNaN(number) == false)) {
        var valor = 0;
        var valorX = 0;
        var x = 0;
        var y = 0;
        var soma = 0;

        for (var i = 0; i < number.length; i++) {
            array.push(number[i]);
        }
        array.reverse();

        for (var y = 0; y < number.length; y++) {
            if ([y] % 2 !== 0) {
                valor = array[y] * 2;
                if (valor >= 10) {
                    x = parseInt(valor.toString().slice(0, 1));
                    z = parseInt(valor.toString().slice(1, 2));
                    valorX = x + z;
                    arrCalculado.push(valorX);
                } else {
                    arrCalculado.push(array[y] * 2);
                }
            } else {
                valorX = array[y];
                arrCalculado.push(valorX);
            }
        }
        for (var k = 0; k < arrCalculado.length; k++) {
            soma += parseInt(arrCalculado[k]);
        }
        var digitoValido = soma % 10;
        if (digitoValido === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Valor invalido";
        // throw TypeError("Valor invalido");
    }
    // } catch (e) {
    //     console.log(e);
    // }
}