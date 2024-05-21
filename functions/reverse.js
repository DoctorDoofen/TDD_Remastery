function reversedArray(arr) {
    let result = []
    for (let el of arr) {
        let reversed = el.split('').reverse().join('')
        result.push(reversed)
    }
    return result
}

module.exports = reversedArray