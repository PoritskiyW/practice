function isEqual (obj1, obj2){
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return undefined;
    }
    if (Array.isArray(obj1) || Array.isArray(obj1)) {
        return undefined;
    }

    return isEqualReq(obj1, obj2);
}

function isEqualReq(obj1, obj2){

    if(obj1 === null && obj2 === null){
        return true;
    }

    let props1;
    let props2;

    props1 = Object.getOwnPropertyNames(obj1);
    props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];
        const bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';

        if ((!bothAreObjects && (obj1[prop] !== obj2[prop]))
            || (bothAreObjects && !isEqualReq(obj1[prop], obj2[prop]))) {
            return false;
        }
    }
    return true;
}

module.exports = isEqual;