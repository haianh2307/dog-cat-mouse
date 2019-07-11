function Horse(name){
    this.name = name;
}
Horse.prototype.eat = function(){
    console.log('eat grass')
}
module.exports = Horse