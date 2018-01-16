let input1 = document.querySelector("input1");
let input2 = document.querySelector("input2");

// Mathematical operators
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiplied = document.getElementById("multiplied");
let divided = document.getElementById("divided");
let equal = document.getElementById("equal");

// Digits
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

// Decimal
let dot = document.getElementById("dot");

// Clear button
let clear = document.getElementById("clear");

// Mathematical operators event listeners
plus.addEventListener("click", plusFun);
minus.addEventListener("click", minusFun);
multiplied.addEventListener("click", multipliedFun);
divided.addEventListener("click", dividedFun);
equal.addEventListener("click", equalFun);

function plusFun() {
	document.getElementById("input1").InnerHTML = "asdf";
}
