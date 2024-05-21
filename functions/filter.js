let filterArray = (arr) => {
    let result = []
    for (let el of arr) {
        if (el.endsWith('er')) {
            result.push(el)
        }
    }
    return result
}

module.exports = filterArray 
