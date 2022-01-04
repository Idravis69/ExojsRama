
console.log("hello la promo simplon")


/*let nom = "jojo";
const monAge = 5;
let ville = "curis au mont dor";

console.log(nom)
console.log(monAge)
console.log(ville)

var nom = 'ada';
var age = 59;
var monAge = "23";

console.log(typeof age)

let a = 10;
let b = 5;
let resulat = a + b
console.log("10 + 5 = " + resulat);

let x = 2 < 7;
console.log(x)

let x = 18;
let y = -7;
let nom = 'manu';
let jojo = 'jojo';
let a;
jojo = false;

console.log(x,y,nom,jojo,a);

let nomSas = "je participe a la formation simplon";
let duree = "7 mois";
let dormationPro = "pour entreprise Xefi";
console.log(nomSas,duree,dormationPro)

let myArray = ["bca", 5 , 5/3, "dde"];

myArray[0] = "blablacar";

console.log(myArray);

let myData = [[12,6,8],
[44,71,90],
[23,54,99]];

myData[1][2] = 11;

console.log(myData[1][2], myData[2][0]);

let friends = ["janice", "monica", "ben"];
friends.pop();
friends.shift();
friends.push("phoebe");
friends.unshift("Rachel");
friends.splice(2,0,"Ross", "Chandler", "Joey");

console.log(friends);

var a = parseInt(prompt("premier nomnbre"));
let b = parseInt(prompt("second nombre"));
let x = parseInt(a);
let y = parseInt(b);

alert(a + b);

let age = 18;
if (age == 18) {
    console.log("tu peux passer")
} else {
    console.log("casse toi")
}

let km = 27
if (km >= 26) {
    console.log("revision tchnique")
} else if (km >= 20) {
    console.log("revision a prevoir")
} else { (km < 20)
    console.log("rien a prevoir")
}

Exo: 
Faire 2 variables, firstName et age qu’on récupère avec 2 prompt
Faire une condition qui vous dira Welcome si votre prenom est Sofiane et que votre age est supérieur à 18
Faire une autre condition qui affichera un message si le prénom rentré contient le même nombre de lettre que l’age (exemple, si je met Jean et que j’ai 4 ans)
Faire encore une condition qui affichera quelque chose si l’age est entre 30 et 50 ans
Faire une condition qui affichera quelque chose si le prénom est Abby ou Paul mais que l’age est inférieur à 70 
*/

/*let firstName = "Abby";
let age = 4;

if (firstName == "Sofiane" && age == 18) {
    console.log("Welcome")
} else if (age >= 30 && age <= 50) {
    console.log("tu est dans lintervalle")
} else if (firstName == "Abby" || firstName == "Paul" && age <= 70) {
    console.log("tu a le bon nom et bon age")
} else if (length == firstName && age) {
    console.log("meme nombre")
}*/


/*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*/

let firstName = prompt("ecirt nom");
let age = parseInt(prompt("ecrit age"));

if (firstName == "Sofiane" && age == 18) {
    console.log("Welcome")
} else if (age >= 31 && age <= 49) {
    console.log("tu est dans lintervalle")
} else if (firstName == "Abby" || firstName == "Paul" && age <= 70) {
    console.log("tu a le bon nom et bon age")
} else if (firstName.length == age) {
    console.log("meme nombre")
}



