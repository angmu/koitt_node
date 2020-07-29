/**
 *function
 */

var calc={};

calc.add= function(a,b){
	return a+b;
}
calc.multi= function(a,b){
	return a*b;
}
calc.substract= function(a,b){
	return a-b;
}

calc.division= function(a,b){
	return a/b;
}

console.dir(calc.add(10,5));
console.dir(calc.substract(10,5));
console.dir(calc.multi(10,5));
console.dir(calc.division(10,5));

//외부에서 사용할 수 없는 형태.
//function add(a,b){
//	return a+b;
//}

//function multi(a,b){
//	return a*b;
//}
//
//function substract(a,b){
//	return a-b;
//}
//
//function division(a,b){
//	return a/b;
//}

//console.dir(add(10,5));
//console.dir(substract(10,5));
//console.dir(multi(10,5));
//console.dir(division(10,5));
