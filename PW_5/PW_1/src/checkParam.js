function checkParam(number) {
    let prime = true;
    let even = false;
    let divisible = false;

    if(!Number.parseInt(number) && number !== 0){
        return 'argument must be a number';
    }

    //check is prime
    if(number > 0) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                prime = false;
                break;
            }
        }
    } else {
        prime = false;
    }

    //check is even
    if(number % 2 === 0) {
        even = true;
    }

    //check is divisible by 10
    if(number % 10 === 0) {
        divisible = true;
    }

    return [prime, even, divisible];
}

module.exports = checkParam;