//Opdracht Iterators oude stijl loops > While loops

let colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
};

// //Hi Silta, momenteel is de condition die je in je while loop hebt staan nog niet helemaal correct en heb je i nog niet declared.
// In pseudo code:
// while (i gelijk is aan de lengte van de colors array) {
//       log de waarde;
//       voeg 1 toe aan i;
// }
// In de condition wil je in dit geval iets zetten wat “waar” is (true), totdat je wilt dat de loop stopt en de condition naar “niet waar” veranderd (false).
// Dus je zou hier beter iets van while (i < colors.length) kunnen stellen.
// Daarnaast als je nog boven de loop i declared: let i = 0; ben je helemaal klaar om opnieuw te testen.

for (i = 0; i < colors.length; i++) {
    console.log (colors[i]);
};

colors.forEach (colors => console.log (colors));