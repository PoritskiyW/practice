function getRidOfDuplicates (arr){
    if(!Array.isArray(arr)){
        return undefined;
    }
    return arr.reduce((result, item) => {
        return result.includes(item) ? result : [... result, item];
    }, []);
}

module.exports = getRidOfDuplicates;