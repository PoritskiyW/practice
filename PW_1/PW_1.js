
//Task 1
function isPalindrome (str) {

    //cut spaces
    str = str.replaceAll(' ', '');

    //check if palindrome
    let strR = str.split('').reverse().join('');
    let isPalindrome = true;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) !== strR.charAt(i)) {

            isPalindrome = false;
        }
    }
    return isPalindrome;
}

//Task 2
function isPasswordValid (str) {

    //symbols
    let symbols = ['!', ':', '-', '?', '.', ' ', ','];

    //check length
    if (str.length < 2 || str.length > 20) {
        return 'incorrect input data';
    }

    //check 1st symbol
    if (str.charAt(0) !== str.charAt(0).toUpperCase()) {
        return 'INVALID';
    }

    //check if not number and accessed symbol
    let hasSymbol = false;

    for (let i = 0; i < str.length; i++) {

        if (!isNaN(str.charAt(i)) && !symbols.includes(str.charAt(i))) {
            return 'INVALID';
        } else if (str.charAt(i).toUpperCase() !== str.charAt(i).toUpperCase() && !symbols.includes(str.charAt(i))) {
            return 'INVALID';
        } else if (symbols.includes(str.charAt(i))) {
            hasSymbol = true;
        }

    }

    if (hasSymbol === true) {
        return 'VALID';
    } else {
        return 'INVALID';
    }
}

//Task 3
function sumArguments (number, str) {

    if (number % 3 === 0 && number % 5 === 0 && number % 15 === 0) {
        number = -number;
    }

    str = Number.parseFloat(str);

    return number + str;

}

//Task 4
function checkParam (number) {

    let prime = true;
    let even = false;
    let divisible = false;

    //check is prime
    if (number > 0) {

        for (let i = 2; i < number; i++) {

            if (number % i === 0) {
                prime = false;
                break;
            }
        }
    } else if (number < 0) {

        prime = false;
    }

    //check is even
    if (number % 2 === 0) {
        even = true;
    }

    //check is divisible by 10
    if (number % 10 === 0) {
        divisible = true;
    }


    return [prime, even, divisible];
}

