// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total)

// Crie duas expressões que retornem NaN
var nantest1 = '50'
var nantest2 = 'numero'
var nantest3 = ( nantest1 + nantest2 ) / 2
console.log(nantest3)

// Somar a string '200' com o número 50 e retornar 250
var somastring = '200'
var somanumero = 50
var retorno2 = +somastring + somanumero
console.log(retorno2)
// Incremente o número 5 e retorne o seu valor incrementado
var incremente = 5
var retorno3 = ++incremente
console.log(incremente)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number) //
var pesoPorDois = (numero / 2) + unidade;
console.log(pesoPorDois)

