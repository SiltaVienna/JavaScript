//Hey kiddo
const greeting = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const sayHi = function (age) {
    if (greeting(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(sayHi(22));
console.log(sayHi(12));

//VAT calculations 1

const price = function (basePrice, vatPercentage) {
    const perc = vatPercentage / 100;
    return basePrice * perc;
};

const priceWithVat = function (basePrice, vatPercentage) {
    const priceTotal = price (basePrice, vatPercentage);
    return basePrice + priceTotal;
};

console.log(priceWithVat(1000,21));
console.log(priceWithVat(2,9));

//VAT calculations 2
// mijn poging
// const priceAndVat = function (basePrice, vatPercentage) {
//     const amountIncludingVat = baseprice * (vatPercentage / 100);
//     return amountIncludingVat;
// };

// const priceInclVat = function (basePrice, vatPercentage) {
//     const priceWithVatTotal = priceAndVat (basePrice, vatPercentage);
//     return [amountIncludingVat, vatPercentage];
// }

// console.log(priceInclVat(1000,21));

const calculateBasePrice = function (priceInclVat, vatPercentage) {
    const basePrice = priceInclVat / ((100 + vatPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVat = function(priceInclVat, vatPercentage) {
    const basePrice = calculateBasePrice(priceInclVat, vatPercentage);
    const VAT = priceInclVat - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVat(1000,21));
console.log(calculateBasePriceAndVat(2.18,9));