/**
 * http://usejsdoc.org/
 */

var fs=require('fs');

fs.readFile('./data/world', 'utf-8',function(err, data) {
	
	if(err){
		console.log('파일읽기 에러'+err);
	}
	
	fs.writeFile('./data/world2', data,function(err){
		if(err){
			console.log('파일저장 에러'+err);
		}console.log('파일저장성공');
	});
});