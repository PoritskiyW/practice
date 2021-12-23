function logNumbers(num) {
    if (typeof num !== 'number') {
        return 'argument must be a number';
    }

    //validate number
    if (num !== Math.floor(num) || num <= 0) {
        return 'argument must be an integer and > 0';
    }

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('threeFive');
        } else if (i % 3 === 0) {
            console.log('three');
        } else if (i % 5 === 0) {
            console.log('five');
        } else {
            console.log(i);
        }
    }
}

module.exports = logNumbers;