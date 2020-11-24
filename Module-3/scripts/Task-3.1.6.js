var mealPrice = 40.50;
var tipAmt = (mealPrice* 12.5) / 100;
var totalMealPrice = mealPrice + tipAmt;

var tipAmtRound = tipAmt.toFixed(2); //Round amount up to 2 decimal points.
var totalMealPriceRound = totalMealPrice.toFixed(2); //Round amount up to 2 decimal points.

// alert('For your meal today, you have given a tip of £'+tipAmt+'.');

// document.write('Your total bill, with tip, is £'+totalMealPrice+'.');

// console.log('Your total bill, with tip, is £'+totalMealPrice+'.');

alert('For your meal today, you have given a tip of £'+tipAmtRound+'.');

document.write('Your total bill, with tip, is £'+totalMealPriceRound+'.');

console.log('Your total bill, with tip, is £'+totalMealPriceRound+'.');





// var mealPrice = 40;
// var tipAmt = (40 * 10) / 100;
// var totalMealPrice = mealPrice + tipAmt;