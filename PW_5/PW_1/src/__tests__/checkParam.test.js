const checkParam = require('../checkParam');

describe('checkParam', () =>{
    test('has to return text that argument is not a number', () => {
        expect(checkParam('asd')).toStrictEqual('argument must be a number');
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(0)).toStrictEqual([false, true, true]);
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(15)).toStrictEqual([false, false, false]);
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(10)).toStrictEqual([false, true, true]);
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(2)).toStrictEqual([true, true, false]);
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(-2)).toStrictEqual([false, true, false]);
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(-10)).toStrictEqual([false, true, true]);
    })

    test('has to return array with boolean of characteristics of a number', () =>{
        expect(checkParam(-15)).toStrictEqual([false, false, false]);
    })
})