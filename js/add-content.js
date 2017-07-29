var today = new Date(); // create new object
var hourNow = today.getHours(); // find current hours
var greetings;

//Display the appropiate greeting based on teh current time
if (hourNow>18){
	greetings = 'Good Evening!';
} else if (hourNow>12){
	greetings = 'Good Afternoon!';
} else if (hourNow>0){
	greetings = 'Good Morning!'
} else {
	greetings = 'Welcome!';
}


document.write('<h3>'+ greetings + '<h3>');