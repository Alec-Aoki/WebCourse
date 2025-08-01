/* Flat */
let arr = [1, 2, 3, 4, [5, 6, 7, 8], 10, [11, 12, [13, 14]]]

console.log(arr)

let arr2 = arr.flat(1) // O parâmetro é a profundidade de achatamento

console.log(arr2)
// 1: [1, 2, ..., 10, 11, 12, [13, 14]]
// 2: [1, 2, ..., 12, 13, 14]

/* Flatmap */