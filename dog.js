function dog(name){
    this.stomach = [];
};
dog.prototype.eat = (cat) =>{
    this.stomach.push(cat)
    }
module.export = dog