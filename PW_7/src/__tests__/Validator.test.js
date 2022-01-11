const ValidatorClass = require('../Validator');

const Validator = new ValidatorClass();

describe("Tests for Validator class method isEmail", function () {
    test('tests for isEmail method valid', () => {
        expect(Validator.isEmail('poritskiyW@gmail.com')).toBe(true);
    })
    test('tests for isEmail method not valid', () => {
        expect(Validator.isEmail('por@itskiyW@gmail.com')).toBe(false);
    })
    test('tests for isEmail method empty', () => {
        expect(Validator.isEmail('')).toBe(false);
    })
})

describe("Tests for Validator class method isDomain", function () {
    test('tests for isDomain method', () => {
        expect(Validator.isDomain('https://overcoder.net')).toBe(true);
    })
    test('tests for isDomain method not valid', () => {
        expect(Validator.isDomain('https://overcode//r.net/q/8601/')).toBe(false);
    })
    test('tests for isDomain method empty', () => {
        expect(Validator.isDomain('')).toBe(false);
    })
})

describe("Tests for Validator class method isDate", function () {
    test('tests for isDate method /', () => {
        expect(Validator.isDate('30/05/2006')).toBe(true);
    })
    test('tests for isDate method .', () => {
        expect(Validator.isDate('30.05.2006')).toBe(true);
    })
    test('tests for isDate method -', () => {
        expect(Validator.isDate('30-05-2006')).toBe(true);
    })
    test('tests for isDate method not valid', () => {
        expect(Validator.isDate('3-5-2006')).toBe(false);
    })
    test('tests for isDate method empty', () => {
        expect(Validator.isDate('')).toBe(false);
    })
})

describe("Tests for Validator class method isPhone", function () {
    test('tests for isPhone method', () => {
        expect(Validator.isPhone('+380 (99) 817-68-92')).toBe(true);
    })
    test('tests for isPhone method 1', () => {
        expect(Validator.isPhone('80 (99) 817-68-92')).toBe(true);
    })
    test('tests for isPhone method 2', () => {
        expect(Validator.isPhone('0 (99) 817-68-92')).toBe(true);
    })
    test('tests for isPhone method 3', () => {
        expect(Validator.isPhone('0 (99) 817-68-92')).toBe(true);
    })
    test('tests for isPhone method not valid', () => {
        expect(Validator.isPhone('(99) 817-68-92')).toBe(false);
    })
    test('tests for isPhone empty', () => {
        expect(Validator.isPhone('')).toBe(false);
    })
})
