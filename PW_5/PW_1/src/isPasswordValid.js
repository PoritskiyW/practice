function isPasswordValid(str) {
    //symbols
    let symbols = ['!', ':', '-', '?', '.', ' ', ','];
    //check length
    if(typeof str !== 'string'){
        return 'incorrect input data';
    } else if(str.length < 2 || str.length > 20) {
        return 'incorrect input data';
    }

    //check 1st symbol
    if(!(str.charAt(0) >= 'A' && str.charAt(0) <= 'Z')) {
        return 'INVALID';
    }

    let hasSymbol = false;

    for (let i = 0; i < str.length; i++) {
        if(Number.parseInt(str.charAt(i))) {
            return 'INVALID';
        } else if(symbols.includes(str.charAt(i))) {
            hasSymbol = true;
        }
    }

    if(hasSymbol) {
        return 'VALID';
    } else {
        return 'INVALID';
    }
}

module.exports = isPasswordValid;
