/**
 * http://usejsdoc.org/
 */
var fs=require('fs');
var content;
fs.readdir('./data',function(error,data){
	content=data[0];
	console.log('readdir 내부출력:'+content);
//	console.log(data);
//	data.forEach(function(item,index){
//		console.log((index+1)+'번째 디렉토리 명:'+item);
//	});
//	
//	console.log('아래는 for문');
//	for(var i=0;i<data.length;i++){
//		console.log((i+1)+'번째 디렉토리 명:'+data[i]);
//	}
});

//readdir이 비동기식이기 때문에 위의것을 처리하믄서 출력하기 때문에 아래처롬...찍힌다.
//readdir 외부출력:undefined
//readdir 내부출력:economy
console.log('readdir 외부출력:'+content);
