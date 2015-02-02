// get the hour of day
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);

//add remove class
//IF NIGHT TIME, REMOVE DAY CLASS, ADD NIGHT CLASS
if(current_hour >= 17){
	$('body').removeClass("day");
	$('body').addClass("night");
};
//toggle class
