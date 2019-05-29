var a = 1;
var b = 1;

var num = window.prompt('Enter Number');

console.log(a);
console.log(b);

    for (var i = 1; i <= num; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
    


