const bind = require('../bind.js');

const testObj = {
    cont: 1,
    func() {
        return this.cont;
    }
};

describe("Tests for bind function", function () {
    test('""', function () {
        expect(bind('')).toEqual(undefined);
    })
    test('null', function () {
        expect(bind(null)).toEqual(undefined);
    })
    test('this', function () {
        expect(bind(testObj.func, testObj)()).toEqual(1);
    })
    test('undefined', function () {
        expect(bind(testObj.func)()).toEqual(undefined);
    })
    test('11', function () {
        expect(bind(testObj.func,11)()).toEqual(undefined);
    })
})