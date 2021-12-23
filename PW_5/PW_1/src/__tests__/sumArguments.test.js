const sumArguments = require('../sumArguments');

describe('sumArguments', () => {
    test('has to return sum of arguments', () => {
        expect(sumArguments(-15, '1')).toStrictEqual(16);
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments(15, '1')).toStrictEqual(-14);
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments(5, '1')).toStrictEqual(6);
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments(0, '1')).toStrictEqual(1);
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments(-15, '1')).toStrictEqual(16);
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments('-15', '1')).toStrictEqual('first argument must be a number');
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments(-15, 1)).toStrictEqual('second argument must be a number in string view');
    })

    test('has to return sum of arguments', () => {
        expect(sumArguments(-15, '')).toStrictEqual('second argument must be a number in string view');
    })
})