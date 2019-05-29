
var a = 10;

function addition(i, a)
{
    return i + a;
}

function sub(i, a)
{
    return i - a;
}

function mul(i, a)
{
   return i * a;
}

function devide(i, a)
{
    return i / a;
}

function module(i, a)
{
    return i % a; 
}
for(i = 2; i < a; i++)
    {           
        console.log('Addition of '+ i +' + '+ a + ' = ',addition(i, a));
        console.log('Subtration of '+ i +' - '+ a + ' = ',sub(i, a));
        console.log('Multiplication of '+ i +' * '+ a + ' = ', mul(i, a));
        console.log('Division of '+ i +' / '+ a + ' = ',devide(i, a));
        console.log('Module of '+ i +' % '+ a + ' = ',module(i, a));
        break;
    }





