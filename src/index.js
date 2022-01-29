module.exports = function toReadable (number) {

    let numOne = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];  
    let numTens = [' ',' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let firstNum = Math.floor((number / 1) % 10);
    let secondNum = Math.floor((number / 10) % 10);
    let thirdNum = Math.floor((number / 100) % 10);

    number = number.toString();

    if (number <= 19) { //0-19
        return numOne[number];
    } else if (number <= 90 && firstNum === 0) { //20-90
        return numTens[secondNum];
    } else if (number <= 99) { //21-99
        return (numTens[secondNum] + " " + numOne[firstNum])
    } else if (firstNum === 0 && secondNum === 0) { //100-900
        return (numOne[thirdNum] + " hundred");
    } else if (firstNum === 0 && secondNum !== 1) { //120-990
        return numOne[thirdNum] + " hundred " + numTens[secondNum];
    } else if (secondNum === 0) { //101-909
        return numOne[thirdNum] + " hundred " + numOne[firstNum];
    } else if (secondNum !== 1) { //121-999
        return numOne[thirdNum] + " hundred " + numTens[secondNum] + " " + numOne[firstNum];
    } else { //111-919
        let twinNum = secondNum.toString() + firstNum.toString();
        return numOne[thirdNum] + " hundred " + numOne[twinNum];
    }
};
