"use strict";
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

reiksmiuMasyvas = ['a','s','c','d','e','f','g','h'];
let atviksciasMasyvas = [];
for ( let i =reiksmiuMasyvas.length; i >= 0; i-- ) {
    atviksciasMasyvas.push(reiksmiuMasyvas[i]);
}
console.log(atviksciasMasyvas);

//3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 3 yra 4 vienetai.
let intervalStart = -18;
let intervalFinish = 18;
let numbers = 0;
let divBy = 7;
for ( let i = intervalStart; i < intervalFinish; i++ ) {
    if (i%divBy ===0 ) {
        numbers++
    }
}
console.log('Saiciu intervale tarp '+intervalStart +' ir '+intervalFinish+' besidlijanciu be liekanos is '+divBy+' yra '+numbers+' vienetai');