const outOfCycle = require('../outOfCycle');
const {clearMocks} = require("../../jest.config");

const spy = jest.spyOn(console, "log");

describe('outOfCycle', () => {
    test('must stop log on 15 14', () => {
        outOfCycle();
        expect(spy).toHaveBeenLastCalledWith(15, 14);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
})
