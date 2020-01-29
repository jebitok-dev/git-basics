// Arithmetic operations

// Function declaration
function div(a,b) {
    return a/b;

}

let dividend = div (6,2);
console.log(dividend);

// Function expression
let div_exp = function(a,b)
{
return a / b;
};

//let dividend_exp=div_exp (7,2);
console.log(dividend_exp)

// Arrow Function
let dividend_exp = (a,b) => {
return a % b
}

let person = { 
    name: " Sharon Jebitok",
    gender: " female ",
    email: " sharonkosgei4@gmail.com ",
    occupation: " student software development "
    };
    //Reference a value from key value pair in person object
    let jina=person.name;
    console.log('My name is ' + jina + ' and I am a '+ person.occupation);