/*
Declaring a function

To declare a function, you use the function keyword, followed by the function name, a list of parameters, and the function body.

function functionName( parameters ) {
    
    function body

    CODE GOES HERE
}
*/

function greeting( name ){

    console.log('Hello ' + name);

}

greeting('Madelaine');

// greeting('Wayne');

function nameAndAge( name, age ){
    console.log( name + ' is ' + age +' years old');
}

nameAndAge('Madelaine', 35);