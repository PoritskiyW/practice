function isCoupleEquals (arr, num) {

    let intArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i])) {

            intArr.push(arr[i]);
        }
    }

    for (let i = 0; i < intArr.length; i++) {

        let outerNum = intArr[i]

        for (let j = i + 1; j < intArr.length - i; j++) {

            if (intArr[j] + outerNum === num) {

                return true;
            }
        }
    }
    return false;
}

function deepArrToFlat (arr) {

    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== "object") {

            resultArr.push(arr[i]);
        } else {

            resultArr = resultArr.concat(arr[i]);
            resultArr = deepArrToFlat(resultArr);
        }
    }
    return resultArr;
}

function splitArrays (arr, num) {



    let resultArr = []; //массив в который будет выведен результат.

    for (let i = 0; i < Math.ceil(arr.length / num); i++) {

        resultArr[i] = arr.slice((i * num), (i * num) + num);
    }

    return resultArr;
}

function compareObj (obj1, obj2) {

    for (const key in obj1) {

        if (obj2.hasOwnProperty(key)) {

            if (obj1[key] !== obj2[key] && typeof obj1[key] !== "object") {

                return false;
            }
        }
    }
    return true;
}

console.log(splitArrays([1,2,3,4,5], 2))