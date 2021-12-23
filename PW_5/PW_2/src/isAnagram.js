function isAnagram(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'arguments must be a string';
    } else if (str1.length < 2 || str2.length < 2) {
        return 'arguments must be a string with at least 2 symbols';
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    str1 = str1.replace(/[^a-zа-я]+/g, '').split('');
    str2 = str2.replace(/[^a-zа-я]+/g, '').split('');

    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.sort().join('');
    str2 = str2.sort().join('');

    return str1 === str2;
}

module.exports = isAnagram;