const isEmpty = require('../isEmpty.js'); 

describe("Tests for isEmpty function", function () {
    test('handle empty argument',function () {
        expect(isEmpty()).toEqual(undefined);
    })
    test('handle null argument',function () {
        expect(isEmpty(null)).toEqual(undefined);
    })
    test('handle empty object argument',function () {
        expect(isEmpty({})).toEqual(true);
    })
    test('handle 1 prop argument',function () {
        expect(isEmpty({a:1})).toEqual(false);
    })
    test('handle undefined prop',function () {
        expect(isEmpty({a:undefined})).toEqual(true);
    })
    test('handle symbol undefined argument',function () {
        expect(isEmpty({[Symbol("s")]:undefined})).toEqual(true);
    })
    test('handle symbol  argument',function () {
        expect(isEmpty({[Symbol("s")]:1})).toEqual(true);
    })
})