const getRidOfDuplicates = require('../getRidOfDuplicates.js'); 

describe("Tests for getRidOfDuplicates function", function () {
    test('handle empty string',function () {
        expect(getRidOfDuplicates()).toEqual(undefined);
    })
    test('handle null',function () {
        expect(getRidOfDuplicates(null)).toEqual(undefined);
    })
    test('handle empty array',function () {
        expect(getRidOfDuplicates([])).toEqual([]);
    })
    test('handle 1 dup arr',function () {
        expect(getRidOfDuplicates([1,2,3,3])).toEqual([1,2,3]);
    })
    test('handle couple dup arr',function () {
        expect(getRidOfDuplicates([1,2,3,3,1,1,1])).toEqual([1,2,3]);
    })
    test('handle no dup arr',function () {
        expect(getRidOfDuplicates([1,2,3])).toEqual([1,2,3]);
    })
})