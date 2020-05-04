"use strict";
// Veiksmai su kintamaisiais

// 1. Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
let grandTotal = 0;
grandTotal =  numberOne + numberTwo + numberThree;
console.log(grandTotal);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp būtų sudarytas tarpas
// Rezultatą išvesti į console
let abcTotal = '';
for (let i=0; i < abc.length; i++) {
    abcTotal = abcTotal + ' ' + abc[i];
}
console.log(abcTotal);

// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
let pazymiaiTotal = 0;
for (let i=0; i < pazymiai.length; i++) {
    pazymiaiTotal = pazymiai[i] + pazymiaiTotal;
}
console.log(pazymiaiTotal);

// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
abcTotal = '';
for (let i=0; i < abc.length; i++) {
    if (i != 0) {
        abcTotal = abcTotal + ' ' +',' + abc[i];
    } else
     abcTotal = abcTotal + ' '  + abc[i];
}
console.log(abcTotal);

