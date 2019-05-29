
var a = 10;
var b = 10;
function addition(i, a) {
    return i + a;
}

function sub(i, a) {
    return i - a;
}

function mul(i, a) {
    return i * a;
}

function devide(i, a) {
    return i / a;
}

function module(i, a) {
    return i % a;
}
for (i = 1; i < a; i++) {
    for (j = 1; j < b; j++) {
        console.log(`Addition of ${i} + ${j} =`, addition(i, j));
        console.log(`Subtration of ${i} - ${j}=`, sub(i, j));
        console.log(`Multiplication of ${i} * ${j}=`, mul(i, j));
        console.log(`Division of ${i} / ${j}=`, devide(i, j));
        console.log(`Module of ${i} % ${j}=`, module(i, j));

    }
}





