// var myCat = {
//     "name" : "Meow",
//     "species" : "cat",
//     "favFood" : "Tuna",
// };

// var myFavColor = ["blue", "green", "purple"];

// var thePets = [
//     {
//         "name" : "Meow",
//         "species" : "cat",
//         "favFood" : "Tuna",
//     }, 
//     {
//         "name" : "Bark",
//         "species" : "dog",
//         "favFood" : "carrots",
//     }, 
// ]

var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
ourRequest.onload = function (){
    // console.log(ourRequest.responseText);
    var ourData = ourRequest.responseText;
    
};

ourRequest.send();