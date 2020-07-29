/**
 * pm2설치 https://pm2.keymetrics.io/ 서버가 다운되면 다시 알아서 구동. 파일이 변경된게 있으면 알아서 refresh
 */


var url=require('url');
var http=require('http');
var fs=require('fs');

var list='';//nav 용도

var app=http.createServer(function(request,response){
	
	var _url=request.url;
	var queryData=url.parse(_url,true).query;
	var title=queryData.id;
	
	var pathname=url.parse(_url,true).pathname;
	var content;
	var template;
	
	fs.readdir('./data',function(err,fileList){
		list='<ul>'; //list+=으로 시작하면 늘어난다..ㄷㄷㄷ...
		for(var i=0;i<fileList.length;i++){
			list+=`<li><a href='./?id=${fileList[i]}'>${fileList[i]}</a></li>`;
		}
		list+='</ul>';
	});
	
	if(pathname=='/'){
		
		if(title==undefined){
			title=`
				naver 메인페이지
			`;
			content=`
			 <h3>메인입니다.<h3>
			 <p>환영합니다.</p>
			`;
			template=`
				<!DOCTYPE html>
				<html>
				<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				</head>
				<body>
				<h1><a href="./">${title}</a></h1>
				${list}
				<h3>${title}</h3>
				<p>
				${content}
				</p>
				</body>
				</html>
				`;
		}else{
			content=fs.readFileSync(`data/${title}`, 'utf-8');
			template=`
				<!DOCTYPE html>
				<html>
				<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				</head>
				<body>
				<h1><a href="./">${title}</a></h1>
				${list}
				<h3>${title}</h3>
				<p>
				${content}
				</p>
				</body>
				</html>
			`;
		}
		
	}else{
		response.writeHead(404,{'Content-Type':'text/html;charset=UTF-8'});
		response.end('페이지없음');
		return;
	}
	
	response.writeHead(200);
	response.end(template);
	
});

app.listen(3000);