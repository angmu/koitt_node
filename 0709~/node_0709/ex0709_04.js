/**
 * http://usejsdoc.org/
 */
var fs=require('fs');
var title='world';
var content=`
	<strong>하버드·MIT, 트럼프와 '전면전'... 법원에 "유학생 추방 막아달라"</strong><br>
AP, CNN 등 주요 외신에 따르면 8일(현지시각) 하버드대와 MIT는 모든 수업을 온라인으로 수강하는 외국인 유학생의 비자를 취소하겠다는 미국 정부의 새 정책을 막아달라고 법원에 소송을 냈다. 	
`;
//fs.writeFile('./data/world2',content,function(error){
//	if(error){
//		console.log('error:'+error);
//	}
//	console.log('파일쓰기완료');
//});

fs.writeFile(`./data/${title}`,content,function(error){
	if(error){
		console.log('error:'+error);
	}
	
	fs.readdir('./data', function(err, files) {
		files.forEach(function(item,index) {
			console.log(index+1+'번째 데이터:'+item);
		});
	});
	
	
	console.log('파일쓰기완료');
});