/**
 * http://usejsdoc.org/
 */

var http=require('http');
var url=require('url');
var fs=require('fs');
var qs=require('querystring');
var title='';
var content='';
var template='';

var app=http.createServer(function(request,response){
	
	var _url=request.url;//입력된 url
	var queryData=url.parse(_url, true).query;
	var pathname=url.parse(_url, true).pathname;
	
	if(pathname=='/'){
		response.writeHead(200);
		response.end('success');
	}else if(pathname=='/create'){
		fs.readFile('./form.html','utf-8',function(err,data){
			response.writeHead(200);
			response.end(data);
		});
	}else if(pathname=='/create_result'){
		var body='';
		request.on('data',function(data){
			body+=data;
		});
		request.on('end',function(data){
			var post=qs.parse(body);
			title=post.title;
			content=post.content;

			fs.writeFile(`./data/${title}`, content, function(error) {
				if(error){
					console.log('쓰기실패');
				}
				//err처리 안하면 오류난다.(data를 err로 인식)
				fs.readdir('./data',function(err,data){
					template='<html><head></head><body><ul>';
					data.forEach(function(item, index) {
						template+=`
						<li>${item}</li>
						`;
					});
					template+='</ul></body></html>';
					response.writeHead(200);
					response.end(template);
				});
				
			});
			
			
		});
		
	}else{
		response.writeHead(404);
		response.end('fail');
	}
	
});

app.listen(3000);