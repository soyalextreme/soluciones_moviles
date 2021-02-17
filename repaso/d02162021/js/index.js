
let a = 3;
let b = 2;
let c = "3";
const d = "This is a const"


console.log(a == c);
console.log(a === c);
console.log(typeof(d));



// Arrays 

let carsBrand = ["Mercedes", "Tesla", "Chevrolet", "GM"];
console.log(carsBrand.length);
console.log(carsBrand[0]);


carsBrand.forEach(car => {
    console.log(car);
});


function miFuncion() {
    console.log('Estoy en la funcion');
}

function sumatoria(a, b){
    console.log("La suma es: " + (a + b));
}

miFuncion();
sumatoria(2, 4)


function wordify(adjective) {
    return word => `${adjective} ${word}`  
}

const prettier = wordify("Pretty");
console.log(prettier("Ana"));

let sumar = (a, b) => a + b;

console.log(sumar(2, 3));


let date = () => Date.now();
console.log(date());



let f3 = (number) => `funcion sin parametros ${number%2 ? "es primo" : "no es primo"}`;
let f4 = () => ("Funcion general");

function Person() {

    Person.prototype.setName = function (name) { 
        this.name = name;
     }

    Person.prototype.getName = function () {
        this.name;
    }
}




class Persona {
    constructor(name) {
        this.name = name;
    }
}

console.log(new Persona());


// Callbacks

function imprimir(mensaje){
    console.log(mensaje);
}


function adition(a, b, funcionCallback) {
    let resultado = a + b
    funcionCallback(`La suma es: ${resultado}`);
}

adition(2, 3, imprimir)