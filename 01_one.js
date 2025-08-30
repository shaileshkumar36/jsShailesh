console.log("shailesh kumar");


let name = "shailesh kumar";
const age = 24;
var location = "india";
locationNext = "usa";
let work;  // undefined

/*
prefer not to use var
because var is function-scoped, while let and const are block-scoped, 
which helps prevent issues with variable hoisting and re-declaration.
*/


console.table([name, age,location, locationNext, work]);

