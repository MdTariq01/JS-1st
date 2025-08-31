const name = "Tariq"
const repocount = 16

console.log(`My name is ${name} and my total repos are ${repocount}`);

const gameName = new String("Tariq")

// console.log(gameName.__promo__);


console.log(gameName.charAt(3));

console.log(gameName.slice(0,4));

console.log(gameName.codePointAt(3)); // gives the indexes ascii number

console.log(gameName.substring(0,3));

console.log(gameName.slice(-4,4)); // the negative should be substracted from total length and start with that number from back and don't start from zero in back

const newName = new String("   Dhoni    ")

console.log(newName.trim()); // removes extra spacing
