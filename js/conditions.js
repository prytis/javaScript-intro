"use strict";
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