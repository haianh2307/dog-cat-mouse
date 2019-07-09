function mouse(name){
    this.name = name;
    this.die = false
}
cat.prototype.die = () =>{
this.die = true;
}
module.export = mouse