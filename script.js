//* 1) Crie uma função chamada saudacao que receba um nome como parâmetro e retorne a frase://
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao('Rayanne'));

//* 2) Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.//
function soma(num1,num2) {
    return num1 + num2;
}
console.log(soma(9, 10));


//*3) Crie uma função chamada ehPar que receba um número e retorne true se for par e false se for ímpar.//
function ehPar(num){
    if(num % 2 === 0)
        return `O número ${num} é par!`;
    else
        return `O número ${num} é ímpar!`;
}
console.log(ehPar(7));

/*4) Crie um objeto chamado calculadora com as seguintes funções como métodos:
somar(a, b)
subtrair(a, b)
multiplicar(a, b)
dividir(a, b)*/
const calculadora = {
    somar: function(a,b){
        return `${a} + ${b} = ${a + b}`;
    },
    subtrair: function(a,b){
        return `${a} - ${b} = ${a - b}`;
    },
    multiplicar: function(a,b){
        return `${a} * ${b} = ${a * b}`;
    },
    dividir: function(a,b){
        return `${a} / ${b} = ${a /b }`;
    },
}
console.log(calculadora.somar(70,90));
console.log(calculadora.subtrair(30,20));
console.log(calculadora.multiplicar(2,5));
console.log(calculadora.dividir(12,2));

//*5) Crie uma função chamada criarSaudacao que receba uma saudação (ex: "Bom dia") e retorne uma nova função. Essa nova função deve receber um nome e retornar a saudação personalizada (ex: "Bom dia, João!").//
function criarSaudacao(saudacao) {
    return function(nome) {
    return `${saudacao}, ${nome}!`;
    }
}
console.log(criarSaudacao('Bom dia')('João'));

//*6) Crie uma função chamada atualizarIdade que receba um objeto pessoa com as propriedades nome e idade, e um novo valor de idade. A função deve atualizar a idade da pessoa.//

function atualizarIdade(pessoa, novaIdade) {
    pessoa.idade = novaIdade;
    return pessoa;
}
console.log(atualizarIdade({nome: 'Rayanne', idade: 23}, 24));