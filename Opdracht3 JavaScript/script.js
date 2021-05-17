const age = 17;

if (age > 18) {
    console.log("je mag naar binnen");
} else if (age < 18) {
    console.log("je bent te jong");
} 

const isFemale = false;

if (isFemale) {
    console.log("welkom voor ladiesnight");
} else {
    console.log("je bent een man"); 
}

// Wat gaat hier mis?
const driverStatus = 'bob';

if (driverStatus = 'bob') {
    console.log("Bob heeft niets op en mag rijden");
} else {
    console.log("Jij mag niet meer rijden");
}