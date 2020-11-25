// global scope

// local scope

var globalScope = 'GLOBAL SCOPE'; //Available for anything in our project

var localScope = 'GLOBALLY (LocalScope)';

console.log( globalScope );

//A function to call globalScope in the localScope
function scope(){
    
    var localScope = 'LOCALSCOPE';

    console.log ( globalScope );

    return localScope;

}

// console.log( localScope );

// scope(); // To be able to access both scopes.

var scopeValue = scope(); //A variable to display all the scopes

console.log ( scopeValue );


console.log(globalScope);
console.log(localScope);