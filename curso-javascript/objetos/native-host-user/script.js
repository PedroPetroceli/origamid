// Liste 5 objetos nativos
Object
Array
Function
String
Number
// Liste 5 objetos do browser
Window
history
Document
HTMLAllCollection
NodeList
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined') {
    console.log('Existe')
} else {
    console.log('Não Existe')
}
