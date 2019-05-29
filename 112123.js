var str = '';
var num = window.prompt('Enter Number');
for (var i = 1; i <= parseInt(num); i++) {
    for (var j = 1; j <= i; j++) {
        str+=j;
    }
    str+='\n';
}
console.log(str);