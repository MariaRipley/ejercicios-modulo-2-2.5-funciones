'use strict';

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