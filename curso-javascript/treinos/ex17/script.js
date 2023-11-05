// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade){
this.nome = nome
this.sobrenome = sobrenome
this.idade = idade
}

Pessoas.prototype.nomeCompleto = function() {
    return `${this.nome}  ${this.sobrenome}`
}
const Pedro = new Pessoas('Pedro', 'Petroceli', 27)


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElemnt
li.click; // function
li.innerText; //String
li.value; // Number 
li.hidden; //Bolean
li.offsetLeft; //Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
