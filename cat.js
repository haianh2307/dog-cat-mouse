var mouse = require('./Mouse')

function Cat(name){
    this.name = name;
    this.stomach = [];
}
Cat.prototype.eat = function(animal) {
if (animal instanceof mouse){
    this.stomach.push(animal)
    

}else {
throw new Error('Cat can only eat mouse')
} 
}
module.exports = Cat