
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiroValor = comidas.shift()
const ultimoValor = comidas.pop()
comidas.unshift('Peixe', 'Batata')
comidas.push('Arroz')
console.log(comidas)


// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

estudantes.sort()
estudantes.reverse()
const joana = estudantes.includes('Joana')
const juliana = estudantes.includes('Juliana')
console.log(estudantes)
console.log(juliana)
console.log(joana)





// Substitua section por ul e div com li,
// utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split('section').join('ul').split('div').join('li')
console.log(html)



// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const carrosClone = carros.slice()
carros.pop()
console.log(carros)
console.log(carrosClone)