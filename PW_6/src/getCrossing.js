function getCrossing (obj1, obj2) {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return undefined;
    }
    let result = {};

    for (const prop in obj1){
        if(obj2.hasOwnProperty(prop)){
            result[prop] = obj1[prop];
        }
    }

    return result;
}


module.exports = getCrossing;