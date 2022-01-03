const isEqual = require('../isEqual.js'); 

describe("Tests for isEqual function", function () {
    test('handle empty argument',function () {
        expect(isEqual()).toEqual(undefined);
    })
    test('handle null arguments', function () {
        expect(isEqual(null,null)).toEqual(true);
    })
    test('handle empty arrays',function () {
        expect(isEqual([],[])).toEqual(undefined);
    })
    test('handle empty objects',function () {
        expect(isEqual({},{})).toEqual(true);
    })
    test('handle simple objects equal',function () {
        expect(isEqual({a:1},{a:1})).toEqual(true);
    })
    test('handle simple objects not equal',function () {
        expect(isEqual({a:1},{a:2})).toEqual(false);
    })
    test('handle 2 levels objects equal',function () {
        expect(isEqual({a:1, b:{c:1}},{a:1, b:{c:1}})).toEqual(true);
    })
    test('handle 2 levels objects not equal',function () {
        expect(isEqual({a:1, b:{c:1}},{a:1, b:{c:2}})).toEqual(false);
    })
    test('handle 2 levels objects w array equal',function () {
        expect(isEqual({a:1, b:{c:[1,2,3,4,5]}},{a:1, b:{c:[1,2,3,4,5]}})).toEqual(true);
    })
    test('handle 2 levels objects w array not equal',function () {
        expect(isEqual({a:1, b:{c:[1,2,3,4,8]}},{a:1, b:{c:[1,2,3,4,5]}})).toEqual(false);
    })
    test('handle 2 levels objects w array diff order equal',function () {
        expect(isEqual({a:1, b:{c:[1,2,3,4,5]}, d:1},{a:1, d:1, b:{c:[1,2,3,4,5]}})).toEqual(true);
    })
    test('handle 2 levels objects w array diff length equal',function () {
        expect(isEqual({a:1, b:{c:[1,2,3,4,8,1]}},{a:1, b:{c:[1,2,3,4,5]}})).toEqual(false);
    })
})