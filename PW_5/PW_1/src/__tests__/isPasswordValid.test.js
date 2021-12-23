const isPasswordValid = require('../isPasswordValid');


describe('isPasswordValid', () => {
    test('has to return true if password valid', () => {
        expect(isPasswordValid(null)).toStrictEqual('incorrect input data');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('')).toStrictEqual('incorrect input data');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('Ab')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('Asdfghjklzxcvbnmoiuy')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('Asdfghjklz!u')).toStrictEqual('VALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('asdfghjklzxcvbnmoiu!')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('asdfgh/*/vbnmoiu!')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('1sdfghjklzxcvbnmoiu!')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('Sdfghj1lzxcvbnmoiu!')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('.sdfghjklzxcvbnmoiu!')).toStrictEqual('INVALID');
    })

    test('has to return true if password valid', () => {
        expect(isPasswordValid('Absasdca.')).toStrictEqual('VALID');
    })
})