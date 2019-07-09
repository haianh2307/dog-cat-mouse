function cat(name){
    this.stomach = [];
}
cat.prototype.eat = (mouse) =>{
this.stomach.push(mouse)
}
module.exports = cat