// var button = document.getElementById("myBtn");

// button.addEventListener("click", function (event) {
//     alert("Hi!");
// });


var button = document.getElementById("myBtn");

var sayHi = function(event){
    alert("Hi!");
};

button.addEventListener('click', sayHi);


var button = document.getElementById("tickleBtn");

var sayTickle = function(event){
    alert("That tickles!");
};

button.addEventListener('mouseover', sayTickle);