function Cat(name){
    this.stomach = [];
}
Cat.prototype.eat = (mouse) =>{
this.stomach.push(mouse)
}
module.exports = Cat