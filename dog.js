var chalk = require('chalk')

function Dog(name) {
    this.name = name;
    this.stomach = [];
};
Dog.prototype.eat = (cat) => {
    this.stomach.push(cat)
}
Dog.prototype.sayHi = function () {
    console.log('Hi --------- ' + chalk.blue(this.name))
}
module.exports = Dog