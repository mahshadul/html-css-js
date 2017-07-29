// Create variable for the welcoem message

var greeting = 'Howdy';
var name = 'Hashi';
var message = ', please check your order';

// Concatenate the three variables above to create the welcome message

var welcome = greeting + name + message;

//Create variable to hold details about the sign

var sign = 'Oakland house';
var tiles = 'sign.length';
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get element that has id of gretting
var el = document.getElementById('gretting');
el.textContent = welcome;

//
var elSign = document.getElementById('userSign');
elSign.textContent = sign;
