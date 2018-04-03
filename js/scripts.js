var gallonToLiter = function(gallons) {
    return gallons * 3.785411784;
};

var literToGallon = function(liters) {
    return liters / 3.785411784;
};

var input = parseFloat(prompt("Enter the amount:"));

alert(input + " gallons is " + gallonToLiter(input) + " liters.");