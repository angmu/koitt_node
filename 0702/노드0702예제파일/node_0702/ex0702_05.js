/**
 * http://usejsdoc.org/
 */

var calc=require('./calc'); //파일명을 적어준다,
var calc2=require('./calc2'); //

console.log(calc.add(10,5));
//console.log(calc.multi(10,5)); //exports로 선언안해놔서 사용불가.

console.log('calc2더하기 :'+calc2.add(10,5));
console.log('calc2곱하기 :'+calc2.multi(10,5));
console.log('calc2나누기 :'+calc2.division(10,5));
console.log('calc2빼기 :'+calc2.substract(10,5));

//calc 말고 calc2 처럼 module에 담아서 한꺼번에 보내주는것을 더 많이 사용
