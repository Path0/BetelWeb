

ctdn();
document.getElementById("event").innerHTML = "summer in";
window.setInterval(ctdn, 1000);

function ctdn() {
    var now = new Date(Date.now());
    var to = new Date();
    to.setFullYear(2022,4-1,7);
    to.setHours(0);
    to.setMinutes(0);
    to.setSeconds(0);
    to.setMilliseconds(0);
    var secondsTill = getSeconds(to.getTime() - now.getTime());
    if(secondsTill < 0) {
        document.getElementById("T").innerHTML = "T plus";
        secondsTill = Math.abs(secondsTill);
    }
    document.getElementById("countdown").innerHTML = addCommas(Math.floor(secondsTill));
    document.getElementById("title").innerHTML = addCommas(Math.floor(secondsTill)) + " Seconds";
   

}

function getSeconds(milliseconds) {
    return milliseconds/1000;
}


function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
   }