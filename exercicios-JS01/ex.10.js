//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em dois objetos separados.
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria,
// imprime false.

const joão ={
    name:"joão",
    age:34
}
const maria ={
    name:"maria",
    age:34
}

const compare = joão === joão
console.log(compare)          //true

const compare2 = joão === maria
console.log(compare2)         //false