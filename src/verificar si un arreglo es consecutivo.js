function solution(seq) {
    let  malo =0
    for (let i = 1; i < seq.length; i++) {
        console.log(`corrida en ${i}`)
        console.log(`${seq[i] } <= ${seq[i-2]}`)
        console.log(`${seq[i+1] } <= ${seq[i-1]}`)
        if(seq[i] <= seq [i -1 ]){
            malo++ ; 

        }
        if(malo >1 ) return false  
        if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
    }
    return true ; 

  }

  arr = [1, 2, 1, 2]
console.log(solution(arr) )