var mocha = require("mocha");
var chai = require("chai");
var validaCartao = require("../index");
var expect = chai.expect;


describe.only("validaCartao", function () {
    describe("#cardValidator", function () {
        it("Quando nao informar numero do cartao", function () {
            expect(validaCartao.cardValidator(""))
                .to.deep.equal("Valor invalido");
        });
        // });
        // describe("#cardValidator", function () {
        it("Quando informar numero do cartao valido", function () {
            expect(validaCartao.cardValidator("36490102462661"))
                .to.deep.equal(true);
        });
        // });
        // describe("#cardValidator", function () {
        it("Quando informar numero do cartao invalido", function () {
            expect(validaCartao.cardValidator("406168310095334"))
                .to.deep.equal(false);
        });
        // });
        // describe("#cardValidator", function () {
        it("Quando informar uma string", function () {
            expect(validaCartao.cardValidator("sil"))
                .to.deep.equal("Valor invalido");
        });
    });

});