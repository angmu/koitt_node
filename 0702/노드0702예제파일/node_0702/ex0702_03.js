/**
 * argv  env exit
 */

console.log('argv 속성:'+process.argv);
console.log(process.argv); //꺽쇠 로 콘솔이 찍히면 배열이라는 뜻 (node위치와 파일위치 출력)
//길이
console.log('배열의 길이:'+process.argv.length);//length
//출력
process.argv.forEach(function(content,index){
	console.log(index+':'+content);
});

var arr1=['홍길동','김유신','유관순','강감찬','시나몬빵'];
arr1.forEach(function(content,index){
	console.log(index+':'+content);
});// 아래보다는 이게 좀더 빠르다.

for(var i=0;i<arr1.length;i++){
	console.log(i+':'+arr1[i]);
}