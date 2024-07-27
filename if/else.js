const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!! O javascript por ser fracamente tipado imprime as demais condições, assim como no exemplo. 
