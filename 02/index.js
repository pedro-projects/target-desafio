/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const ValueToFind = 55

let v1 = 0
let v2 = 1
let v3

let list = [v1, v2]

for (let i = 0; i <= ValueToFind; i++) {
    v3 = v1 + v2
    v1 = v2
    v2 = v3
    list.push(v3)
    if (v3 === ValueToFind) {
        break
    }
}

const local = list.find(n => n === ValueToFind)

if (local) {
    console.log(list)
    console.log('Encontrado!')
}
else {
    console.log('Não está presente em Fibonacci!')
}