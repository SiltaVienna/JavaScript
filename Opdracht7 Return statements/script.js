//Checking if number is big
const numberIsBig = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(numberIsBig(107));
console.log(numberIsBig(6));

//Bouncer at a club
const bouncer = function (maxNumber, currentNumber, ageOfPerson) {
    if (ageOfPerson < 18) {
        return "this is a club for adults";
    }
    
    if (currentNumber <= maxNumber) {
        return "come in";
    } else {
        return "it's too busy, come back later";
    }
   
}

console.log(bouncer(150, 151, 21));

//Calculating the average
const calculateAverage = function (number1, number2, number3, number4, number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
}

console.log(calculateAverage(2, 4, 6, 8, 10));
console.log(calculateAverage(22, 345, 777, 3, 1035));

//3 ways to write Functions
//Function declaration
function declaration (number01, number02) {
    const squared1 = number01 * number01;
    const squared2 = number02 * number02;
    const added = squared1 + squared2;
    const squaredAgain = added * added;
    return squaredAgain;
}

console.log(declaration(4,7));

//Function expression
const expression = function (number01, number02) {
    const squared1 = number01 * number01;
    const squared2 = number02 * number02;
    const added = squared1 + squared2;
    const squaredAgain = added * added;
    return squaredAgain;
};

console.log(expression(7,7));

//Shorter version
const expression2 = function (number01, number02) {
    const sum = number01 * number01 + number02 * number02;
    return sum * sum;
};

console.log(expression2(7,7));

//Arrow function
const arrow = (number01, number02) => {
    const squared1 = number01 * number01;
    const squared2 = number02 * number02;
    const added = squared1 + squared2;
    const squaredAgain = added * added;
    return squaredAgain;
}

console.log(arrow(4,7));