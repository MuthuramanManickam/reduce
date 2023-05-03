array=[24,78,456,098,34]

function fname(arr) {
    return arr.reduce((acc,cr)=>acc*cr,1)
}
console.log(fname(array))