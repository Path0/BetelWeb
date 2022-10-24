var fs = require("fs");
var number = "";
fs.readFile("number.txt", "utf8", function(err, data) {
    number = data;
});
console.log(data);