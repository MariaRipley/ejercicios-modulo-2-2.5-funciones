'use strict';

//Ejercicio 1

function multiplicacion (a, b) {
    const result = a*b;
    console.log(result);
}

function media (num1, num2, num3, num4) {
    const mediaResult = (num1+num2+num3+num4)/4;
    console.log(mediaResult);
}

function parImpar (num) {
    const par = 'True';
    const impar = 'False';
    if (num % 2 === 0) {
        console.log(par);
    } else {
        console.log(impar);
    }
}

//Ejercicio 2

function dimeElIva (valorSinIva) {
    const precioSinIva = valorSinIva;
    const iva = valorSinIva*0.21;
    const total = precioSinIva+iva;
    const resultado = `Precio sin IVA: ${precioSinIva} IVA: ${iva} Total: ${total}`;
    console.log(resultado);
}

// Ejercicio 1 del 2.5.3

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"
