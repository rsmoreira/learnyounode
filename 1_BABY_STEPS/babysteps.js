
var args = process.argv;
var numberAux;
var total = 0;

args.forEach(function(element) {
    if(!isNaN(element)) {
        numberAux = Number(element);
        total = total + numberAux;
    }
}, this);

console.log(total);
