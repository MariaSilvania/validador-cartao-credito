var mocha = require("mocha");
var chai = require("chai");
var validaCartao = require("../index");
var expect = chai.expect;


describe.only("validaCartao", function () {
    describe("#cardValidator", function () {
        it("Quando nao houver parametro", function () {
            expect(() => validaCartao.cardValidator("")).to.throw();
        });
        it("Quando o numero for uma string", function () {
            expect(() => validaCartao.cardValidator("sil")).to.throw();
        });
        it("Quando o numero for um inteiro e houver um digito", function () {
            expect(() => validaCartao.cardValidator("1")).to.throw();
        });
        it("Quando o numero for um inteiro e houver menos de 16 digitos", function () {
            expect(() => validaCartao.cardValidator("45394015278")).to.throw();
        });
        it("Quando informar numero do cartao valido", function () {
            expect(validaCartao.cardValidator("4798846349843569"))
                .to.deep.equal(true);
        });
        it("Quando informar numero do cartao invalido", function () {
            expect(validaCartao.cardValidator("4539401527887372"))
                .to.deep.equal(false);
        });
    });
});