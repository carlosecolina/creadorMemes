//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

/* function solution(inputArray) {
    let producto = 0 
    for (let i = 0 ; i< inputArray.length ; i++ ){
        let j = i + 1  ; 
        let operation = inputArray[i] * inputArray[j];
        if (i == 0 ){
            producto = operation;
        }
        
            
        if (operation > producto){
            producto = operation; 
        }else if (producto < operation ){
            producto = operation
        }
        
        
    }
    return producto ;
}
 */
let numbers = [-50,10,20,5,2,5,-1,-43]
function solution(arr) {
    
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))

    
  }

  console.log (solution(numbers))