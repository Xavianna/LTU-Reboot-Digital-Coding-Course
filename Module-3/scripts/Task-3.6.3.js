// var button = document.getElementById("myBtn");

// button.addEventListener("click", function (event) {
//     alert("Hi!");
// });


var button = document.getElementById("myBtn");

var sayHi = function(event){
    alert("Hi!");
};

button.addEventListener('click', sayHi);