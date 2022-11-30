/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/



/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const person = {
	name: "Barry", // string property
	surname: "Rambo", // another string property
    email: "example@example.com",
	age: 29 // numeric property
};

console.log(person.name);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

person.hasLicense = true;

console.log(person.hasLicense);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete person.age;

console.log(person.age);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const person2 = {
	name: "Billy", // string property
	surname: "Bob", // another string property
    email: "example2@example.com",
};

console.log("Person 1 has email:", person.email,"\nPerson 2 has email:",person2.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 62;
let finalPrice;

if(totalShoppingCart>50){
    finalPrice = totalShoppingCart;
}else{
    finalPrice = totalShoppingCart+10;
}
console.log(finalPrice);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFridayPrice = totalShoppingCart*(80/100);

if(blackFridayPrice>50){
    finalPrice = blackFridayPrice;
}else{
    finalPrice = blackFridayPrice+10;
}
console.log(finalPrice);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car1 = {
	brand: "Subaru", // string property
	model: "supafast", // another string property
    licensePlate: "12345",
};
let car2={};
let car3={};
let car4={};
let car5={};
let car6={};

Object.assign(car2,car1);
Object.assign(car3,car1);
Object.assign(car4,car1);
Object.assign(car5,car1);
Object.assign(car6,car1);

car2.licensePlate = "23456";
car3.licensePlate = "34567";
car4.licensePlate = "45678";
car5.licensePlate = "56789";
car6.licensePlate = "67890";

console.log(car1.licensePlate);
console.log(car2.licensePlate);
console.log(car3.licensePlate);
console.log(car4.licensePlate);
console.log(car5.licensePlate);
console.log(car6.licensePlate);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car1,car2,car3,car4,car5,car6];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();

for(let i=0;i<carsForRent.length;i++){
    console.log(carsForRent[i]);
}

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car1);
console.log(typeof car1.licensePlate);
console.log(typeof car1.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
let car7={
    brand: "Subaru", // string property
	model: "supafast", // another string property
    licensePlate: "98765",
};
let car8={
    brand: "Subaru", // string property
	model: "supafast", // another string property
    licensePlate: "87654",
};
let car9={
    brand: "Subaru", // string property
	model: "supafast", // another string property
    licensePlate: "76543",
};

carsForSale.push(car7,car8,car9);

totalCars = carsForSale.length+carsForRent.length;
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for(let i=0;i<carsForSale.length;i++){
    console.log(carsForSale[i].brand,carsForSale[i].model,carsForSale[i].licensePlate);
    
    
}
