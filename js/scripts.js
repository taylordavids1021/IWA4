let date = 2050;
let status = 'parent';
let count = 0;
let holidays = 'Christmas Day'
let month = 'December'

// if (date === 2050) {
// 	console.log("March", 'Human Rights Day')
// 	date = 'April'
// 	console.log(date, 'Family Day')
// 	console.log(date, 'Freedom Day')
// 	count += 4
// }
if (status === 'student') {
	console.log('June', 'Youth Day')
	count += 1
}

	// console.log('August', 'Women’s Day')
	// console.log('September', 'Heritage Day')
	// date = 'December'
	// console.log(date, 'Day of Reconciliation')
	// count += 3

	if (status === 'parent') {
	    console.log(month, holidays)
	    count += 1
  }

	// console.log(date, 'Day of Goodwill')
	// count += 1

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)