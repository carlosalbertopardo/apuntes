

/*Constructor of the function that wraps a value into an object */
var _Identity = function(val) {
	this.val = val;
}

/* instance of the function */
var Identity =  function(x) { 
	return new _Identity(x);
}

_Identity.prototype.map = function (f) {

	console.log(f);
	return Identity(f(this.val))
}

var addThree = function (elem) {
	console.log(arguments);
	return elem + 3;
}


var result = Identity(4).map(addThree);


/* function that adds 1 to a value */


console.log(result);


