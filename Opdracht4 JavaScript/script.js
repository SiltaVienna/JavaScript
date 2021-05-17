const age = 22;

if (age >= 18) {
    console.log("je mag naar binnen");
} else if (age < 18) {
    console.log("je mag niet naar binnen");
} 

if (age >= 18 && age <= 25) {
    console.log ("Je krijgt 50% korting!");
} else {
    console.log ("Je krijgt geen korting.")
}

const firstName = "Bram";

if (firstName === "Bram" || firstName === "Sarah") {
    console.log ("Bram krijgt een gratis biertje!");
} else {
    console.log ("Jij krijgt geen gratis biertje");
}

const totalAmount = 7;

 if (totalAmount >=100) {
    console.log ("Gratis flessie champagne!");
} else if (totalAmount >50) {
    console.log ("Gratis nachos!"); 
} else if (totalAmount >25){
        console.log ("Gratis bitterballuhhh");
} else {
    console.log ("Geen extra's voor jou")
}       