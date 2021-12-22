
function logNumbers (num) {

    if (typeof num !== 'number') {

        num = Number.parseFloat(num);
    }


    //validate number
    if (num !== Math.floor(num) || num <= 0) {
        return undefined;
    }

    for (let i = 1; i <= num ; i++) {

        if (num % 3 === 0 && num % 5 === 0) {

            console.log('threeFive');
        } else if (num % 3 === 0) {

            console.log('three');
        } else if (num % 5 === 0) {

            console.log('five');
        } else {

            console.log(num);
        }
    }
}

function outOfCycle () {

    for (let i = 0; i < 20; i++) {

        if (i === 16) break;

        for (let j = 0; j < 20; j++) {

            if (i === 15 && j === 15) {

                break;
            }
            console.log(i, j);
        }
    }
}

function isAnagram (str1, str2) {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    str1 = str1.replace(/[^a-zа-я]+/g, '').split('');
    str2 = str2.replace(/[^a-zа-я]+/g, '').split('');


    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.sort().join('');
    str2 = str2.sort().join('');

    if (str1 === str2) {

        return true;
    } else {

        return false;
    }
}

console.log(isAnagram('asdfgh', 'hgfdsa'))