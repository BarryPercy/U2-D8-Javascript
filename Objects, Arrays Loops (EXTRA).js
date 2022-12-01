// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
let arrayToReverse = [1,3,5,7,9,2,14];
for(i=0;i<arrayToReverse.length/2;i++){
    let temp = arrayToReverse[i];
    arrayToReverse[i]=arrayToReverse[arrayToReverse.length-i-1];
    arrayToReverse[arrayToReverse.length-i-1]=temp;
}
console.log("1.",arrayToReverse);



/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let findLargest = [1,5,22,3];
let biggest = findLargest[0];
for(i=1;i<findLargest.length;i++){
    if(findLargest[i]>biggest){
        biggest = findLargest[i];
    }
}
console.log("2.",biggest);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let findSmallest = [1,5,22,3];
let smallest = findSmallest[0];
for(i=1;i<findSmallest.length;i++){
    if(findSmallest[i]<smallest){
        smallest = findSmallest[i];
    }
}
console.log("3.",smallest);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let findingArray = [0,1,2,3,4,5,6,7,8,9,10];
let evenNumbers = [];

for(i=0;i<findingArray.length;i++){
    if(findingArray[i]%2===0){
        evenNumbers.push(findingArray[i]);
    }
}
console.log("4.",evenNumbers);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let deleteFromArray = [0,1,2,3,4,5,6,7,8,9,10,32,34,36,38,40,12,14,16,18,20,11,13];
let lengthOfArray = deleteFromArray.length;
let tempArray = []
for(i=0;i<lengthOfArray;i++){
    if(deleteFromArray[i]%2===1){
        tempArray.push(deleteFromArray[i]);
    }
}
deleteFromArray = tempArray;
console.log("5.", deleteFromArray);


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
let removeFromString = "blaeadsaodasdjuio"
let lengthOfString = removeFromString.length;
for(i=0;i<lengthOfString;i++){
    removeFromString = removeFromString.replace('a','');
    removeFromString = removeFromString.replace('e','');
    removeFromString = removeFromString.replace('i','');
    removeFromString = removeFromString.replace('o','');
    removeFromString = removeFromString.replace('u','');
}
console.log("6. letters remaining after removal:",removeFromString);


/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
let increaseArray = [0,1,2,3,4];
for(i=0;i<increaseArray.length;i++){
    increaseArray[i] +=1;
}
console.log("7.",increaseArray);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let stringArray = ["sup bro", "hey", "a"];

for(let i=0;i<stringArray.length;i++){
    stringArray[i] = stringArray[i].length;
}

console.log("8.",stringArray);
