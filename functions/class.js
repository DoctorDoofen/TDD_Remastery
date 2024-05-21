class Num {
    constructor(number) {
        this.number = number
    }
    multiplyNum(num) {
        let result = this.number * num;
        return result
    }

    divideNum(num) {
        let result = this.number / num;
        return result
    }

    subtractNum(num) {
        let result = this.number - num;
        return result
    }

    addNum(num) {
        let result = this.number + num;
        return result
    }
}

module.exports = Num