const person = "student";
let date = 2050;
let count = 0;

if (date === 2050) {
	console.log("January", "New Year's Day");
	console.log("March", "Human Rights Day");
	date = "April";
	console.log(date, "Family Day");
	console.log(date, "Freedom Day");
	count += 4;

	if (person === "student") {
		console.log("June", "Youth Day");
		count += 1;
	};

	console.log("August", "Women's Day");
	console.log("September", "Heritage Day");
	date = "December";
	console.log(date, "Day of Reconciliation");
	count += 3;

	if (person === "parent") {
		console.log(date, "Christmas Day");
		count += 1;
	};

	console.log(date, "Day of Goodwill");
	count += 1;
};

console.log("Your status is:", person);
console.log("The year is:", date);
console.log("The total holidays is:", count);