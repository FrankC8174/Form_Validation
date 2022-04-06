// /**
//  * Julius Caesar protected his confidential information by encrypting it using a cipher. 
//  * Caesar's cipher shifts each letter by a number of letters. 
//  * If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
//  * In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
//  * Write a function that takes in a string and an integer that performs a Caesar Cipher encryption
//  */

// /** Ok peusdo code 
//  *  Input: text: ABCD, KEY: 3
//  * ABCDEFGHIJKLMNOPQRSTUVWXYZ
//  * IF I SHIFT MY FIRST INPUT 
//  * 3 Shift  A is D
//  * 3 Shift  B is E
//  * 3 Shift  C is F
//  * 3 Shift  D is G
//  * 
//  * OUTPUT: D,E,F,G
//  */

// // 1. create a object and decode every letter in the alphabet by 3 and store as a variable.
// // 2. next we will loop through the string to create our dechiphered string, according to our cipher
// // 3. return the output
// //4. convert input string to lowerCase

// let shift = (inputtedString, inputNumber) => {
//     let decoded = {
//         a: 'd',
//         b: 'e',
//         c: 'f',
//         d: 'g',
//         e: 'h',
//         f: 'i',
//         g: 'j',
//         h: 'k',
//         i: 'l',
//         j: 'm',
//         k: 'n',
//         l: 'o',
//         m: 'p',
//         n: 'q',
//         o: 'r',
//         p: 's',
//         q: 't',
//         r: 'u',
//         s: 'v',
//         t: 'w',
//         u: 'x',
//         v: 'y',
//         w: 'z',
//         x: 'a',
//         y: 'b',
//         z: 'c',
//     }

//     // convert string to lowercase
//     str = str.toLowerCase();

//     //decipher the code 
//     //1. my cipher will be a empty string
//     //2. for loop to go through the length of my decoded string.

//     let decipher = '';
//     for (let i = 0; i < str.length; i++) {
//         decipher += decoded[str[i]];
//     }
// }

// // return output

// return decipher;

// // call 

// console.log(shift('go get me a sandwhich'));

const getJSON = response => response.json();

const logData = data => {
    console.log(data);
    return data;
};

const extractaliases = character => {
    const {aliases} = character;
    return aliases;
};

const printAliases = aliases => {
    for (let a of aliases) {
        console.log(a);
    }
    return aliases.length;
};

const reportError = () => {
    console.error(' There was an error');
    return 0;
};
const printSummary = (howMany) => {
    console.log(`We printed ${howMany} aliases`);
};

fetch(`https://anapioficeandfire.com/api/characters/583`)
.then(getJSON)
.then(logData)
.then(extractAliases)
.then(printAliases)
.catch(reportError)
.then(printSummary)