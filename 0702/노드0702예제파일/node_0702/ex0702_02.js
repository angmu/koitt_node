/**
time
*
*/

var result=0;
console.time('time_count'); //프로그램 시작시간입력
//실행구문입력

for(var i=0;i<1000;i++){
	result+=i;
}

console.timeEnd('time_count');//프로그램 종료시간입력

//이거 2개는 많이 사용한다고 한다.
console.log('현재 실행한 파일 이름:'+__filename);
console.log('현재 실행한 디렉토리 위치'+__dirname);

