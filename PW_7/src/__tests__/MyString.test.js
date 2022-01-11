const MyStringClass = require('../MyString');

const MyString = new MyStringClass();

describe("Tests for MyString class method reverse", function () {
    test('tests for reverse method', () => {
        expect(MyString.reverse('abcde')).toBe('edcba');
    })
    test('tests for reverse method empty', () => {
        expect(MyString.reverse('')).toBe(false);
    })
})

describe("Tests for MyString class method ucFirst", function () {
    test('tests for ucFirst method', () => {
        expect(MyString.ucFirst('abcde')).toBe('Abcde');
    })
    test('tests for ucFirst method empty', () => {
        expect(MyString.ucFirst('')).toBe(false);
    })
})

describe("Tests for MyString class method ucWords", function () {
    test('tests for ucWords method', () => {
        expect(MyString.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde');
    })
    test('tests for ucWords method 1 word', () => {
        expect(MyString.ucWords('abcde')).toBe('Abcde');
    })
    test('tests for ucWords method empty', () => {
        expect(MyString.ucWords('')).toBe(false);
    })
})
