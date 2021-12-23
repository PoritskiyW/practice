const logNumbers = require('../logNumbers');

let spy = jest.spyOn(console, "log");

describe('logNumbers', () => {
    test('get log of a number in string or integer view', () => {
        logNumbers(3);
        expect(spy).toHaveBeenLastCalledWith('three');
    })

    test('get log of a number in string or integer view', () => {
        logNumbers(5);
        expect(spy).toHaveBeenLastCalledWith('five');
    })

    test('get log of a number in string or integer view', () => {
        logNumbers(6);
        expect(spy).toHaveBeenLastCalledWith('three');
    })

    test('get log of a number in string or integer view', () => {
        logNumbers(10);
        expect(spy).toHaveBeenLastCalledWith('five');
    })

    test('get log of a number in string or integer view', () => {
        logNumbers(15);
        expect(spy).toHaveBeenLastCalledWith('threeFive');
    })

    test('get log of a number in string or integer view', () => {
        logNumbers(2);
        expect(spy).toHaveBeenLastCalledWith(2);
    })

    test('get log of a number in string or integer view', () => {
        logNumbers(4);
        expect(spy).toHaveBeenLastCalledWith(4);
    })

    test('get log of a number in string or integer view', () => {
        expect(logNumbers('4')).toBe('argument must be a number');
    })

    test('get log of a number in string or integer view', () => {
        expect(logNumbers(0)).toBe('argument must be an integer and > 0');
    })
})