arr=['muthu','muthu','sarvan','sarvan','maruthu','ponnni','thangam']
let x = arr.reduce((a,e)=>{
    if(e in a){
        a[e]+=1
    }else{
        a[e]=1
    }
    return a
},{})
console.log(x)