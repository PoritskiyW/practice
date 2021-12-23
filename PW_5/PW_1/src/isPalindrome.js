function isPalindrome(str) {
    if(typeof str !== 'string') {
        return 'argument must be a string';
    } else if(str.length < 2) {
        return 'argument must be a string with at least 2 symbols';
    }

    //cut spaces
    str = str.replaceAll(' ', '');

    //check if palindrome
    const strR = str.split('').reverse().join('');
    let isPalindrome = true;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== strR.charAt(i)) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
}

module.exports = isPalindrome;