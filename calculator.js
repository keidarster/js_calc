let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let operator = "";

// Mathematical functions
// Plus
let plus = document.getElementById("plus");

plus.addEventListener("click", function() {
	operator = "+";
});

// Minus
let minus = document.getElementById("minus");

minus.addEventListener("click", function() {
	operator = "-";
});

// Multiplication
let multiplied = document.getElementById("multiplied");

multiplied.addEventListener("click", function() {
	operator = "*";
});

// Division
let divided = document.getElementById("divided");

divided.addEventListener("click", function() {
	operator = "/";
});

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

// Functions
one.addEventListener("click", typeOne);

function typeOne() {
	if(operator === "") {
		input1.textContent += one.innerHTML;
		}
	else {
		input2.textContent += one.innerHTML;
	}
};

two.addEventListener("click", typeTwo);

function typeTwo() {
	if(operator === "") {
		input1.textContent += two.innerHTML;
		}
	else {
		input2.textContent += two.innerHTML;
	}
};

three.addEventListener("click", typeThree);

function typeThree() {
	if(operator === "") {
		input1.textContent += three.innerHTML;
		}
	else {
		input2.textContent += three.innerHTML;
	}
};

four.addEventListener("click", typeFour);

function typeFour() {
	if(operator === "") {
		input1.textContent += four.innerHTML;
		}
	else {
		input2.textContent += four.innerHTML;
	}
};

five.addEventListener("click", typeFive);

function typeFive() {
	if(operator === "") {
		input1.textContent += five.innerHTML;
		}
	else {
		input2.textContent += five.innerHTML;
	}
};

six.addEventListener("click", typeSix);

function typeSix() {
	if(operator === "") {
		input1.textContent += six.innerHTML;
		}
	else {
		input2.textContent += six.innerHTML;
	}
};

seven.addEventListener("click", typeSeven);

function typeSeven() {
	if(operator === "") {
		input1.textContent += seven.innerHTML;
		}
	else {
		input2.textContent += seven.innerHTML;
	}
};

eight.addEventListener("click", typeEight);

function typeEight() {
	if(operator === "") {
		input1.textContent += eight.innerHTML;
		}
	else {
		input2.textContent += eight.innerHTML;
	}
};

nine.addEventListener("click", typeNine);

function typeNine() {
	if(operator === "") {
		input1.textContent += nine.innerHTML;
		}
	else {
		input2.textContent += nine.innerHTML;
	}
};

zero.addEventListener("click", typeZero);

function typeZero() {
	if(operator === "") {
		input1.textContent += zero.innerHTML;
		}
	else {
		input2.textContent += zero.innerHTML;
	}
};

dot.addEventListener("click", typeDot);

function typeDot() {
	if(operator === "") {
		input1.textContent += dot.innerHTML;
		}
	else {
		input2.textContent += dot.innerHTML;
	}
};

// Clear button
let clear = document.getElementById("clear");

// Clear input
clear.addEventListener("click", clearText);

function clearText() {
	input1.textContent = "";
	input2.textContent = "";
	input3.textContent = "";
	operator = ""
};

// Equal/Result
let equal = document.getElementById("equal");

equal.addEventListener("click", showResult);

function showResult() {
	if(operator === "+") {
		input3.textContent = Number(input1.textContent) + Number(input2.textContent);
	}
	else if(operator === "-") {
		input3.textContent = Number(input1.textContent) - Number(input2.textContent);
	}
	else if(operator === "*") {
		input3.textContent = Number(input1.textContent) * Number(input2.textContent);
	}
	else if(operator === "/") {
		input3.textContent = Number(input1.textContent) / Number(input2.textContent);
	}
};