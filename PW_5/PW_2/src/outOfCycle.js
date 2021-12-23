function outOfCycle() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                break;
            }
            console.log(i, j);
        }
    }
}

module.exports = outOfCycle;