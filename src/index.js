module.exports = function getZerosCount(number, base) {
  // your implementation
    let result = [];
    let simpleDigits = findSimpleDigits(base).sort();

    while(simpleDigits.length > 0){
        let simpleDigit = simpleDigits[simpleDigits.length - 1];
        let count = simpleDigits.slice(simpleDigits.indexOf(simpleDigit)).length;
        result.push(Math.floor(getMultiplicityCount(number, simpleDigit, 1, count)));
        simpleDigits.splice(simpleDigits.indexOf(simpleDigit));
    }
    return Math.min.apply(Math, result);
}

function getMultiplicityCount(number, simpleDigit, power, quantity) {
    let result = 0;
    let mult = Math.pow(simpleDigit, power);
    let count = Math.floor(number / mult);

    if(count > 0){
        result += count / quantity  + getMultiplicityCount(number, simpleDigit, power + 1, quantity);
    }
    return result;
}

function findSimpleDigits(number) {
    let simpleDigits = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,  41, 43,
        47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
        103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
        157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
        211, 223, 227, 229, 233, 239, 241, 251];
    let result = [];

    while(simpleDigits.indexOf(number) < 0){
        for(var i = 0; i < simpleDigits.length; i++){
            if(!(number % simpleDigits[i])){
                result.push(simpleDigits[i]);
                break;
            }
        }
        number /= result[result.length - 1];
    }
    result.push(number);
    return result;
}


