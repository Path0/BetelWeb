var now = new Date();
var birth = new Date();
birth.setFullYear(2002,10,30);


var days = new Date(now.getTime() - birth.getTime());

var numOfDays = 0;

numOfDays += getDaysFromMills(days.getTime());

function getDaysFromMills(milliseconds) {
    return ((((milliseconds / 1000) / 60) / 60) / 24);
}
numOfDays = Math.round(numOfDays);
document.getElementById("title").innerHTML = numOfDays + " Days";
document.getElementById("yo").innerHTML = numOfDays + document.getElementById("yo").innerHTML;
