/**
 * http://usejsdoc.org/
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
//메뉴(nav)부분 (전역변수로 끄집어 내주어야한다..)
var list='';
var template='';

function templatelist(){
	fs.readdir('./data',function(err,fileList){
		list='<ul>';
		for(var i=0;i<fileList.length;i++){
			list+=`<li><a href="./?id=${fileList[i]}">${fileList[i]}</a></li>`;
		}
		list+='</ul>';
	});
	return list;	
}

function templateHtml(title,list,content){
	template=`
	<!DOCTYPE html>
				<html>
				<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				</head>
				<body>
					<h1><a href="./">naver 메인페이지</a></h1>
					${list}
					<a href='./create'>메뉴추가</a>
					<h3>${title}</h3>
					<p>
					${content}
					</p>
				</body>
				</html>
				`;
	return template;
}
var app=http.createServer(function(request,response){
	
	//user 요청한 url주소를 받음
	var _url=request.url;
	var queryData=url.parse(_url,true).query;// 쿼리 전체를 뽑아냄
	var title=queryData.id;//파라미터가 id인것을 찾아서 title로 쓰겠다는말
						 //path >/jardin/id?=admin ,pathname=/jardin
	//http://localhost:3000/jardin/id?=admin
	var pathname=url.parse(_url,true).pathname;// 위에서는 /이 pathname이다.
	var data;
	var content;
	list=templatelist();
	//http://localhost:3000/id
	if(pathname=='/'){
		if(title==undefined){
			title='naver뉴스 메인';
			content=fs.readFileSync('./data/index','utf-8');
			//메뉴(nav)부분
			template=templateHtml(title,list,content);
		}else{
			content=fs.readFileSync(`data/${title}`, 'utf-8');
			//메뉴(nav)부분
			template=templateHtml(title,list,content);
		}
	}else if(pathname=='/create'){
		title='create';
		content=fs.realpathSync('./form.html','utf-8');
		template=templateHtml(title,list,content);
	}else{
		response.writeHead(404,{'Content-Type':'text/html;charset=UTF-8'});
		response.end('페이지가 없습니다.');
		return;
	}

	response.writeHead(200);//(200,{'Content-Type':'text/html;charset=UTF-8'})
	response.end(template);
});

app.listen(3000);