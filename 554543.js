var str = '';
var num = window.prompt('Enter Number');
for (var i = parseInt(num); i >=1; i--) {
    for (var j = parseInt(num); j >= i; j--) {
        str+=j;
    }
    str+='\n';
}
console.log(str);
