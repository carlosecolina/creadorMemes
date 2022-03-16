function solution(statues) {
    let arrayOrdenado =  [...statues.sort(function(a, b){return a - b})]    
    let statuas = 0 ; 
    let faltantes = 0 ;
    var index = 0 ; 
    
    for (let i = 0; i < arrayOrdenado.length -1 ; i++) {
        
        index += 1; 
       
        faltantes = ((arrayOrdenado[index] - arrayOrdenado[i]) - 1 );
        
        statuas += faltantes
    }

    return statuas; 
 }

console.log (solution([6, 2, 3, 8]));