// Crie uma arrow function que receba dois números como parâmetros e retorne a soma deles.

const soma = (a, b) => {
    return a + b
}
  
//Crie uma arrow function que receba um número 
//como parâmetro e retorne true se ele for par e false se ele for ímpar.

const som = (a) =>{
    if(a % 2 === 0){
        return true
    } else {
        return false 
    }
}

//Crie uma arrow function que receba um array de números 
//como parâmetro e retorne a soma de todos os elementos.

const somaArray = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  };

//Crie uma arrow function que receba um array de números como parâmetro 
//e retorne um novo array com todos os elementos multiplicados por dois.

const multiArray = (array) =>{
    let multi = 0
    for(let i = 0; i < array.length; i * 2) {
        multi += array[i]
    }
    return multi
}
