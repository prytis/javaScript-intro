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

// Kintamųjų palyginimas
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

let result = '';
if (numberThree < numberTwo) {
    result = 'Pomidoras';
    } else result = ' Bandykite dar karta';

    console.log(result);

if (numberThree > numberTwo) {
    result = 'Pomidoras';
    } else result = ' Bandykite dar karta';

    console.log(result);

if (numberThree == numberTwo) {
        result = 'Pomidoras';
        } else result = ' Bandykite dar karta';
    console.log(result);

    if (numberThree != numberTwo) {
        result = 'Pomidoras';
        } else result = ' Bandykite dar karta';
    
        console.log(result);
    
    if (numberThree >= numberTwo) {
            result = 'Pomidoras';
            } else result = ' Bandykite dar karta';
        console.log(result);

        if (numberThree <= numberTwo) {
            result = 'Pomidoras';
            } else result = ' Bandykite dar karta';
        console.log(result);

// 2. Išvesti teksto tipo kintamųjų ilgius

console.log(vardas.length);
console.log(pavarde.length);
console.log(tevoVardas.length);


//3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

let vardai = ['Jonaskardisis','Petras','Stanislovas','Donaldas','Ronaldas','Jufefas'];
let pavardes = ['Petrauskas','Kazlauskas','Makarauskas','Gevorkis','Saakashvilis','Guldedava']

if (vardai[0].length > pavarde[0].length) {
        result = 'vardas '+vardai[0]+ ' trumpesnis uz pavarde '+pavardes[0];
        } else result = 'Pavarde '+pavardes[0]+ ' ilgesne uz varda '+vardai[0];

    console.log(result);

if (vardai[1].length < pavarde[1].length) {
        result = 'vardas '+vardai[1]+ 'trumpesnis uz pavarde '+pavardes[1];
        } else result = 'Pavarde '+pavardes[1]+ ' ilgesne uz varda '+vardai[1];
    
    console.log(result);

if (vardai[2].length == pavarde[2].length) {
        result = 'vardas '+vardai[2]+ ' tokio pacio ilgio kai '+pavardes[2];
         } else result = 'Pavardes '+pavardes[2]+ ' ilgis skiriasi nuo vardo '+vardai[2]+' ilgio';
        
    console.log(result);
if (vardai[3].length != pavarde[3].length) {
        result = 'vardo '+vardai[3]+ ' ir pavardes '+pavardes[3]+' ilgiai skiriasi';
         } else result = 'vardo '+vardai[3]+ ' ir pavardes '+pavardes[3]+' ilgiai vienodi';
        
    console.log(result);

// 4.Išvesti sąrašo tipo kintamųjų ilgius


for (let i=0; i < pavardes.length; i++) {
    console.log('Pavardes: '+pavardes[i]+' ilgis '+pavardes[i].length);
    }

// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

let max = pavardes.length;
for ( let i=0; i <= max; i++) {
    if ( typeof vardai[i] != 'undefined')
        if (vardai[i].length >  pavardes[i].length)
        result = 1;
        else if (vardai[i].length <  pavardes[i].length)
        result = 2;
        else if (vardai[i].length ==  pavardes[i].length)
        result = 3;
        else if (vardai[i].length !=  pavardes[i].length)
        result = 4;
        else if (vardai[i].length <=  pavardes[i].length)
        result = 5;
        else if (vardai[i].length >=  pavardes[i].length)
        result = 5;
        console.log('rezultatas :'+vardai[i]+' '+pavardes[i]+' '+result);
}

// Ciklo for panaudojimas

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

let reiksmiuMasyvas = [];
grandTotal = 0;
for (var i=0; i < 0; i++) {
    reiksmiuMasyvas.push(i);
    grandTotal = grandTotal + i; 
}
    console.log(reiksmiuMasyvas);
    console.log(grandTotal);

    reiksmiuMasyvas = [];
    grandTotal = 0;
    for (var i=0; i < 4; i++) {
        reiksmiuMasyvas.push(i);
        grandTotal = grandTotal + i; 
    }
        console.log(reiksmiuMasyvas);
        console.log(grandTotal);

    reiksmiuMasyvas = [];
    grandTotal = 0;
for (var i=0; i < 100; i++) {
    reiksmiuMasyvas.push(i);
    grandTotal = grandTotal + i; 
}
    console.log(reiksmiuMasyvas);
    console.log(grandTotal);

reiksmiuMasyvas = [];
grandTotal = 0;
for (var i=574; i < 815; i++) {
    reiksmiuMasyvas.push(i);
    grandTotal = grandTotal + i; 
}
    console.log(reiksmiuMasyvas);
    console.log(grandTotal);

reiksmiuMasyvas = [];
grandTotal = 0;
for (var i=-50; i < 50; i++) {
    reiksmiuMasyvas.push(i);
    grandTotal = grandTotal + i; 
}
    console.log(reiksmiuMasyvas);
    console.log(grandTotal);
    
    reiksmiuMasyvas = [];
    grandTotal = 0;
for (var i=-70; i < 30; i++) {
    reiksmiuMasyvas.push(i);
    grandTotal = grandTotal + i; 
}
        console.log(reiksmiuMasyvas);
        console.log(grandTotal);