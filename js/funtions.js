"use strict";

// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

console.log( '<------------Funkcijos------------>' );
function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

function daugyba ( numerA, numerB){
    
    let suma = numerA*numerB;
    return suma
}
console.log(daugyba(4,5));
console.log(daugyba(7,5));
console.log(daugyba(4,7));

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log('-----------------skaitmenu kiekis skaiciuje --------------->');
function skaitmenuKiekisSkaiciuje ( number) {
    if ( typeof number !== 'number' || isNaN(number) ) {
        return "Pateikta netinkamo tipo reikšmė."
    } else
    return 'skaiciuje '+number+' skaitmenu kiekis yra:'+number.toString().length;

}

console.log(skaitmenuKiekisSkaiciuje( 5 ));
console.log(skaitmenuKiekisSkaiciuje( 781 ));
console.log(skaitmenuKiekisSkaiciuje( 37060123456 ));
console.log(skaitmenuKiekisSkaiciuje( 'asd' ));
console.log(skaitmenuKiekisSkaiciuje( NaN ));
console.log(skaitmenuKiekisSkaiciuje( true ));

// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.log('-----------------didziausias skaicius sarase--------------->');

function didziausiasSkaiciusSarase( masyvas ) {
    if ( typeof masyvas != 'object' ) {
        return 'Pateikta netinkamo tipo reikšmė.'
    } else
    if ( masyvas.length === 0){
        return 'Pateiktas sąrašas negali būti tuščias.'
    } else return Math.max(...masyvas);   
}
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );

// Funkcija pavadinimu “isrinktiRaides”:
// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

console.log('-----------------isrinkti raides--------------->');

function isrinktiRaides (myString, index) {
    let newString = '';        
    if ( typeof myString != 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
        } else 
        if ( myString.length === 0 || myString.length > 100) {
           return 'Pirmasis kintamasis yra netinkamo tipo.';
        } else 
        if ( typeof index != 'number') {
            return 'Antrasis kintamasis yra netinkamo tipo.';
        } else 
        if ( index != 'Infinity') {
            return 'Antrasis kintamasis turi būti didesnis už nulį.';
        } else 
        if ( index > myString.length) {
            return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
        } else 
        if ( index > 0 )
            for ( let i = index - 1; i < myString.length;i=i+index){
                newString = newString + myString.charAt(i);
                // console.log(index*i)
            } else {
                for ( let i=myString.length+index; i>0; i=i+next)
                    newString = newSteing + myString[i];
            }
        return newString;
    }


    console.log(isrinktiRaides( 'abcdefg', 2 ));
    console.log(isrinktiRaides( 'abcdefghijkl', 3 ));
    console.log(isrinktiRaides( 'abc', 0 ));
    console.log(isrinktiRaides( 'abc', 4 ));
    console.log(isrinktiRaides( '1561', 'a' ));
    console.log(isrinktiRaides( null, 'a' ));
    console.log(isrinktiRaides( 'asdfghj', 1 ));
    console.log(isrinktiRaides( 'asdfghj', -2 ));
    

    console.log( '____________________');
    console.log( 'DALYBA');
    console.log( '____________________');

    function dalyba ( a,b ) {
        if ( !isFinite(a) || !isFinite(b) || b===0) {
        return console.error('Error: duok normalius skaicius')
        }
        return a/b;
    } 

    console.log(dalyba(Infinity,1));
    console.log(dalyba(8,Infinity));
    console.log(dalyba(8,2));
    console.log(dalyba(8,4));
    console.log(dalyba(8,0));

    
