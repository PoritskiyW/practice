const isAnagram = require('../isAnagram');

describe('isAnagram', () => {
    test('has to return true if string is anagram', () => {
        expect(isAnagram('', '')).toStrictEqual('arguments must be a string with at least 2 symbols');
    })

    test('has to return true if string is anagram', () => {
        expect(isAnagram(null, null)).toStrictEqual('arguments must be a string');
    })

    test('has to return true if string is anagram', () => {
        expect(isAnagram(123, 123)).toStrictEqual('arguments must be a string');
    })

    test('has to return true if string is anagram', () => {
        expect(isAnagram('alan nalah', 'aaaannllh')).toStrictEqual(true);
    })

    test('has to return true if string is anagram', () => {
        expect(isAnagram('alan nalah', 'aaaannlh')).toStrictEqual(false);
    })

    test('has to return true if string is anagram', () => {
        expect(isAnagram('alan nalah', 'aaaahnllh')).toStrictEqual(false);
    })
})