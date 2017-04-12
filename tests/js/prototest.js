

console.log('in');

var Animal = function (name) {
	this.name = name;
	this.eats = function () {
		return this.name + " is eating."
	}
}

/*
Animal.prototype.eats = function () {
	return this.name + " is eating."
}
*/

Animal.prototype.age = 22;

var perro = new Animal('jorge');

//console.log(dog.__proto__.hasOwnProperty('toString'));

console.log(perro);