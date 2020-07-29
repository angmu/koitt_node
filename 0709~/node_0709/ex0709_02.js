/**
 * http://usejsdoc.org/
 */

var fs=require('fs');
//동기식
var economy_data=fs.readFileSync('./data/economy', 'utf-8');
console.log('동기');
console.log(economy_data);


//비동기
var economy_data2=fs.readFile('./data/economy','utf-8',function(error,data){
	console.log('비동기');
	console.log(data);
});

console.log('data읽어오기전 출력');