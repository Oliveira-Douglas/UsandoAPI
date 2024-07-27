function teste1(num) {
    if(num > 7)
        console.log(num)                    // condição sempre será executada mesmo que o resultado esteja dentro da validação           
        console.log('final')                // condição será executada de acordo com o informado no argumento ao chamar a função. 
} 

teste1(6)
teste1(8)



// se usar uma unica sentença de código pode usar chave ou não
// para mais de uma sentença de código usar chave 


function teste2(num) {
    if(num > 7);                        // sentença de código vazia que termina com ; 
    
    {
        console.log(num)                // Bloco sem nenhum tipo de filtro 
    }
 }
                                        // não se deve usar ; na definição de um bloco if     
 teste2(6)
 teste2(8)

 // 