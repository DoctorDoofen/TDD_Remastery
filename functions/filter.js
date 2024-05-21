function filterArray(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        if (word.endsWith('er')) {
            result.push(word)
        }
    }
    return result
}

let newArray = [slate, rather, brother, geschlossen]

console.log(filterArray(newArray))

module.exports = filterArray
