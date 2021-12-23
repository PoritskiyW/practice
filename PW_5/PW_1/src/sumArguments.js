function sumArguments(number, str) {
    if (typeof number !== 'number') {
        return 'first argument must be a number';
    }

    if (!Number.parseInt(str) || typeof str !== 'string') {
        return 'second argument must be a number in string view';
    }

    if (number % 3 === 0 && number % 5 === 0 && number % 15 === 0) {
        number = - number;
    }

    str = Number.parseFloat(str);
    return number + str;
}

module.exports = sumArguments;