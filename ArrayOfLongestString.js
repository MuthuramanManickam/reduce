// Write a function that takes an array of strings and returns the longest string in the array.
// Use the reduce method to accomplish this.


//  let x =arr.reduce((acc,cv)=>{
//     if(acc.length<cv.length){
//         console.log(acc,cv)
//         acc=cv
//     }
//     return acc
//    },'')

// console.log(x)


function fname(array) {
    
    b= array.reduce((acc,cr)=>{

        acc = acc.length<cr.length?cr:acc
        return acc
    },)
    return b
}
arr=['muthu','muthuraman','sarvan','sanjay','maruthu','ponnffghjklkjhgfdni','thangam']

console.log(fname(arr))