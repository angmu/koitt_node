/**
 * main
 */

var http=require('http'); //*web구동시 필요 페이지설명.. 404 500등..
console.dir(http);

var fs=require('fs'); //읽어오는 모듈
console.dir(fs);

var url=require('url'); // *web구동시 필요 //path와 parameter를 읽을수이씀
console.dir(url);
var app = http.createServer(function(request,response){ //server를 구동하겠다는 뜻
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
    	 response.writeHead(404);
		 response.end();
		 return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
