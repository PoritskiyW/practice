function getCrossing (obj1, obj2) {
    let result = {};

    for (const prop in obj1){
        if (obj1.hasOwnProperty(prop)){
            if(obj2.hasOwnProperty(prop)){
                result[prop] = obj1[prop];
            }
        }
    }

    const symbols1 = Object.getOwnPropertySymbols(obj1);
    const symbols2 = Object.getOwnPropertySymbols(obj2);
    console.log(symbols1, symbols2)
    for (let i = 0; i < symbols1.length; i++) {
        if(symbols2.includes(symbols1[i])){
            result[symbols1[i]] = obj1[symbols1[i]];
        }
    }

    return result;
}

function isEqual (firstObj, secondObj){
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length !== secondObjKeys.length) {
        return false;
    }

    for (const prop in firstObj) {
        if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
            return false;
        }
    }

    return true;
}

function getRidOfDuplicates (arr){
    return arr.filter((index) => {
        return arr.indexOf(arr[index]) === index;
    })
}

function isEmpty (object){
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
        return true;
    }
    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
}

function bind (fn, context){
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let fnArgs = [].slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
}