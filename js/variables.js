"use strict";

// Kintamųjų inicijavimas


// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const numberOne = 27;
const numberTwo = 3;
const numberThree = 6;

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);



//2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const vardas = "Kenagurenas";
console.log(vardas)
const pavarde = "Mykolauskas";
console.log(pavarde);
const  tevoVardas = "Aloyzo"
const pilnasVardas = vardas +' '+ pavarde+' '+tevoVardas;
console.log(pilnasVardas);

//  Mano megstama spalva yra "juoda".

const spalva = 'juoda';

const spalvosSakinys = "Mano megstama spalva yra:' "+spalva+"'";
console.log(spalvosSakinys); 

const skaiciausSakinys = "Skaicius'"+numberOne+"'"+"yra lyginis";
console.log(skaiciausSakinys);

const du = 2;
const trys = 3;


const sakinys = `'sakinys yra" "`+du+`' yra "`+trys+`' skaiciai`;
console.log(sakinys);

const sakinysOne = `skaicius ${du} ir skaicius ${trys}`;
console.log(sakinysOne);

// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console


const pazymiai = [10,8,6,5,4,3,2,1,0];
const abc = ['a','b','c','d','e','f','g','h','j','k','l'];
const raidesIrSkaiciai = [1,'a',2,'b',3,'c',4,'d']

let sarasuIlgiuMasyvas = [pazymiai.length,abc.length,raidesIrSkaiciai.length];

for ( let i = 0; i <  Math.max(...sarasuIlgiuMasyvas); i++){
    if (pazymiai[i])
        console.log(pazymiai[i]);
    if ( abc[i])    
    console.log(abc[i]);
    if ( raidesIrSkaiciai[i])
    console.log(raidesIrSkaiciai[i]);

}




