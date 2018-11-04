var mocha = require("mocha");
var chai = require("chai");
var validaCartao = require("../index");
var expect = chai.expect;

describe.only("cardValidator()", function () {
    it("Quando nao houver parametro", function () {
        expect(() => validaCartao("")).to.throw();
    });
    it("Quando o numero for uma string", function () {
        expect(() => validaCartao("sil")).to.throw();
    });
    it("Quando o numero for um inteiro e houver um digito", function () {
        expect(() => validaCartao("1")).to.throw();
    });
    it("Quando o numero for um inteiro e houver menos de 16 digitos", function () {
        expect(() => validaCartao("52555883276124")).to.throw();
    });
    it("Quando informar numero do cartao valido", function () {
        expect(validaCartao("5255588327612409"))
            .to.deep.equal(true);
    });
    it("Quando informar numero do cartao invalido", function () {
        expect(validaCartao("5255588327612400"))
            .to.deep.equal(false);
    });
});