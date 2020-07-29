/**
 * http://usejsdoc.org/
 */

var calc={}; //객체선언

calc.add=function(a,b){
	return a+b;
} 
calc.multi=function(a,b){
	return a*b;
}

calc.substract=function(a,b){
	return a-b;
}

calc.division=function(a,b){
	return a/b;
}

module.exports=calc; //calc를 모듈에 담음
