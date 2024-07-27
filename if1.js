// if realizando a validação das condições informadas no parametro da função. 

function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // função sem argumento é falso 
seForVerdadeEuFalo(null) // null é falso 
seForVerdadeEuFalo(undefined) // undefined é falso 
seForVerdadeEuFalo(NaN) // Not a Number é falso 
seForVerdadeEuFalo('') // string vazia é falso 
seForVerdadeEuFalo(0) // o zero é o unico numero que é falso
seForVerdadeEuFalo(-1) // number é verdadeiro 
seForVerdadeEuFalo(' ') // string com espaço é verdadeiro 
seForVerdadeEuFalo('?') // string é verdadeiro  
seForVerdadeEuFalo([]) // array vazio é verdadeiro  
seForVerdadeEuFalo([1, 2]) // array é verdadeiro 
seForVerdadeEuFalo({}) // objeto é verdadeiro