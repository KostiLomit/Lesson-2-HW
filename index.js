"use strict" ;

//1-st - exercise//
const x = 20;
const y = 58;
const z = 42;

const sum = x + y + z;

console.log(sum);

//2-st - exercise//
const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;
const daysInYear = 365;

let myAgeIs = 28;

let myAgeInDays = myAgeIs * daysInYear;
let myAgeInhour = myAgeInDays * hourInDay;
let myAgeInMin = myAgeInhour * minInHour;
let myAgeInSec = myAgeInMin * secInMin;

console.log("I´m " + myAgeIs + " year´s old");
console.log("My age in day´s is " + myAgeInDays + " day´s");
console.log("My age in hour´s is " + myAgeInhour + " hour´s");
console.log("My age in min´s is " + myAgeInMin + " min´s");
console.log("My age in second´s is " + myAgeInSec + " second´s");