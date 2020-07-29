/**
 * http://usejsdoc.org/
 */



//동기식
var fs=require('fs');
fs.readdir('./data',function(error,dataList){
	for(var i=0;i<dataList.length;i++){
		console.log(`데이터 배열 ${i}번째 값: `+dataList[i]);//배열로 리턴 [ 'economic', 'IT', 'politics' ]
		var list=fs.readFileSync(`data/${dataList[i]}`,'utf-8');
			console.log(list);
	}
});


//비동기식

//var fs=require('fs');
//fs.readdir('./data',function(error,dataList){
//	for(var i=0;i<dataList.length;i++){
//		console.log(`데이터 배열 ${i}번째 값: `+dataList[i]);//배열로 리턴 [ 'economic', 'IT', 'politics' ]
//		fs.readFile(`data/${dataList[i]}`,'utf-8',function(err,data){
//			console.log(data);
//		});
//	}
//});