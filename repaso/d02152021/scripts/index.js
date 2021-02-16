const CREATOR = "Alejandro"
var someVariable = "This is a random variable";
let height = 1.70;

alert("Hola mundo!");
const personName = prompt("Me das tu nombre?");


const greeting = document.querySelector("#greeting");

greeting.innerHTML = `<p> Bienvenido! ${personName}</p>`;


setTimeout(()=> {
    alert(`Hola ${personName} disfruta de el sitio web.`);
}, 3000);



// sentencias de control: condicionales if, while

if(personName.toUpperCase() === CREATOR.toUpperCase()) {
    greeting.innerHTML += "Wow! Te llamas igual que mi creador. Espero no seas el."
}


for(let i = 1; i <= 10; i++){
    console.log(i);
}
