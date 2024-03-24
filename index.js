"use strict" ;

//1-st - exercise//
const x = 20;
const y = 58;
const z = 42;

const sum = x + y + z;

console.log(sum);

//2-nd - exercise//
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

//3-rd - exercise//
const count = 42;
const userName = "42";

//first option//
const stringCount = String(count);
const namberUserName = Number(userName);
console.log(stringCount);
console.log(namberUserName);
//second option//
const stringCount2 = count + "";
const namberUserName2 = +userName;
console.log(stringCount2);
console.log(namberUserName2);

//4 - exercise//
const a = 1;
const b = 2;
const c = "белых медведей";

const result = String(a) + String(b) + " " + c;
 
console.log(result);

//5 - exercise//
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let allWords = word1 + word2 + word3 + word4 + word5;

let lengthWords = allWords.length;

console.log(lengthWords);
