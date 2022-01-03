const getCrossing = require('../getCrossing.js'); 

describe("Tests for getCrossing function", function () {

    test('handle not an obj arguments', function () {
        expect(getCrossing(12, 13)).toEqual(undefined);
    });
    test('handle null arguments', function () {
        expect(getCrossing(null, null)).toEqual(undefined);
    })
    test('handle undefined arguments', function () {
        expect(getCrossing(undefined, null)).toEqual(undefined);
    })
    test('handle not crossing', function () {
        expect(getCrossing({a: 2}, {b: 2})).toEqual({});
    });
    test('handle crossing', function () {
        expect(getCrossing({a: 2}, {a: 2})).toEqual({a: 2});
    });
    test('handle particular crossing', function () {
        expect(getCrossing({a: 2, b: 1}, {a: 2})).toEqual({a: 2});
    });
    test('handle crossing diff order', function () {
        expect(getCrossing({a:1,b:2,c:3}, {b:3,a:2,c:1})).toEqual({a:1,b:2,c:3});
    });
    test('handle empty arguments', function () {
        expect(getCrossing({}, {})).toEqual({});
    });

})