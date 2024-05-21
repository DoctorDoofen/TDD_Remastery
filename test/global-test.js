const chai = require('chai')
const expect = chai.expect;

const Num = require('../functions/class')
const filterArray = require('../functions/filter')
const reversedArray = require('../functions/reverse')



describe('class', () => {
    it('should have a number property', () => {
        const nine = new Num(9)

        expect(nine.number).to.equal(9)
    })
    it('should perform subtraction, multiplication, division and addition', () => {
        const nine = new Num(9)

        expect(nine.multiplyNum(2)).to.equal(18)
        expect(nine.divideNum(2)).to.equal(4.5)
        expect(nine.addNum(2)).to.equal(11)
        expect(nine.subtractNum(2)).to.equal(7)
    })
})
describe('filter', () => {
    it('should return a new array of words that end in "er"', () => {
        let newArr = ['slate', 'rather', 'brother', 'geschlossen']

        expect(filterArray(newArr)).to.eql(['rather', 'brother'])
    })
})
describe('reverse', () => {
    it('return a new array with the words all reversed', () => {
        let arr = ['slate', 'rather', 'brother', 'open']

        expect(reversedArray(arr)).to.eql(['etals', 'rehtar', 'rehtorb', 'nepo'])
    })
})