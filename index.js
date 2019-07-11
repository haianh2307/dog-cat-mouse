var Mouse = require('./Mouse')
var Cat = require('./Cat')
var Dog = require('./Dog')

var dog = new Dog('bull')
var cat =  new Cat("tom");
var mouse = new Mouse('jerry');
try{
    cat.eat(dog);
}
catch(error){
console.log('have a error')
}
console.log(cat)