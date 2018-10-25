'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
let monSplit;
function jadenCase(str){

monSplit = str.split(" ");

for (let i = 0 ; i < str.length ; i++) {
monSplit.charAt(0).toUpperCase
} 
return monSplit
}






//* Begin of tests
const assert = require('assert')
assert.strictEqual("Bonjour Je Suis Une Banane","Bonjour Je Suis Une Banane")

// End of tests */
