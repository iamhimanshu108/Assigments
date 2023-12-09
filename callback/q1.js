function doubleArray(arr, callback){
    const doubleArr  = arr.map((num) => {
        return callback(num)
    })
    return doubleArr
}

const orgArray = [1, 2, 3, 4, 5, 6]

function callback(num){
    return num *2
}

const doubledArray = doubleArray(orgArray, callback)

console.log(doubledArray);