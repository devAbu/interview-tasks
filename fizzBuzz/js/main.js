/* NUMBER FROM 1 to 100 */
/* CALCULATE FIZZ, BUZZ, FIZZBUZZ AMOUNT and TOTAL */

let fizz = 0;
let buzz = 0;
let fizzbuzz = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
    fizzbuzz++;
  } else if (i % 3 == 0) {
    console.log("FIZZ");
    fizz++;
  } else if (i % 5 == 0) {
    console.log("BUZZ");
    buzz++;
  } else {
    console.log(i);
  }
}

console.log(`FIZZ: ${fizz}...BUZZ: ${buzz}...FIZZBUZZ: ${fizzbuzz}`);
console.log(`TOTAL: ${fizz + buzz + fizzbuzz}`);
