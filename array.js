// Reverse Number of Array Elements
var arr = [22, 30, 56, 78, 60]; 
var rev = [];
var sum = 0;
rev = arr.reverse();
console.log(rev);

// Sum of Array Element using function
function getSum(total, num)
{
    return total + num;
}

function myFunction(item)
{
    console.log(arr.reduce(getSum, 0));
}
myFunction();
 
// copy the value of one array to another array(copy)
var ar = [12, 15, 19, 8, 4];
var copy = [];
copy = ar;
console.log(copy);


// find the duplicate value of array elements (using if condition and for loop)
var a = [1, 2, 3, 1, 3, 4];
console.log(a)
//var b = a.findIndex[0];
//console.log(a[2]);
if(a[0] === a[1] || a[0] === a[2] || a[0] === a[3] || a[0] === a[4])
{
    //console.log('Duplicate value', a[0]);
}

if(a[1] === a[0] || a[1] === a[2] || a[1] === a[3] || a[1] === a[4])
{
    //console.log('Duplicate value', a[1]);
}

if(a[2] === a[0] || a[2] === a[1] || a[2] === a[3] || a[2] === a[4])
{
    //console.log('Duplicate value', a[2]);
}


for(var i = 0; i<=a.length; i++)
{
    for(var j = i + 1; j<=a.length; j++)
    {
        if(a[i] === a[j])
        {
            console.log('duplicate value',a[i]);
        }
    }
}


// Even or Odd number
var nums = [45, 8, 14, 59, 2, 9];
var even = [];
var odd = [];
for(var i = 0; i < nums.length; i++)
{
    if(nums[i] % 2 == 0)
    {
        even.push(nums[i]);
    }
    else
    {
        odd.push(nums[i]);
    }
}
//console.log('Even Number is',even);
console.log(`Even Number is ${even}`);
//console.log('Odd Number is',odd);
console.log(`Odd Number is ${odd}`);