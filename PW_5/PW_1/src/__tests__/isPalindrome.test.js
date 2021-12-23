const isPalindrome = require('../isPalindrome');

describe('isPalindrome', () => {
    test('has to return true if string is palindrome', () => {
        expect(isPalindrome(null)).toStrictEqual('argument must be a string');
    })

    test('has to return true if string is palindrome', () => {
        expect(isPalindrome('')).toStrictEqual('argument must be a string with at least 2 symbols');
    })

    test('has to return true if string is palindrome', () => {
        expect(isPalindrome('aba')).toStrictEqual(true);
    })

    test('has to return true if string is palindrome', () => {
        expect(isPalindrome('aba aba')).toStrictEqual(true);
    })

    test('has to return true if string is palindrome', () => {
        expect(isPalindrome('aba abc')).toStrictEqual(false);
    })

    test('has to return true if string is palindrome', () => {
        expect(isPalindrome('abc')).toStrictEqual(false);
    })
})