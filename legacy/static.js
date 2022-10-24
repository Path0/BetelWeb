menuBarWidth(6);







function menuBarWidth(num) {
    var menuBarNumbers = num;
    var percentWidth = (100/menuBarNumbers) + "%";
    console.log(percentWidth);
    var count = 0;
    while(count < menuBarNumbers) {
        document.getElementById("nav").style.width = percentWidth;
        document.getElementById("nav").id = "notNav";
    }
}