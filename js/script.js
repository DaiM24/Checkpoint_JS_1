/** Checkpoint
    - Crea mínimo 10 variables que te describan o hagan referencia a tus datos.
    - Defina variables como var o const.
    - Comenta el tipo de dato de la variable.
    - Al menos 1 variable debe ser objeto con un mínimo de 5 propiedades y 1 debe ser un array.
**/

// Type String
const firstName = "Daiana";

// Type String
const secondName = "Mercedes";

// Type String
const lastName = "Mercado"; 

// Type Number
var age = 25;

// Type String
const gener =  "female";

// Type Boolean
var isMarried = true;

// Type Array
var hobbies = ["sing", "run", "draw", "go out"];

// Type Boolean
const haveSiblings = true; 

// Type Boolean 
var havePet = true;

// Type Object
var pet = {
    petSpecimen: "dog",
    petName: "Coco",
    petAge: 1,
    petColor: "black",
    isNaughty: true,
    haveToys: ["balls", "bones", "teddies", "frisbee"],
};

console.log(
    console.log(`My full name is ${firstName} ${secondName} ${lastName}`),
    console.log(`I'm ${age} years old`),
    console.log(`Gener: ${gener}`),
    console.log(`She has boyfriend: ${isMarried}`),
    console.log(`Hobbies: ${hobbies}`),
    console.log(hobbies),
    console.log(`She has siblings: ${haveSiblings}`),
    console.log(`She has pet: ${havePet}`),
    console.log(`Pet name: ${pet.petName}`),
    console.log(pet),
);