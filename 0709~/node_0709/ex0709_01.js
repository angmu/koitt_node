/**
 * http://usejsdoc.org/
 */

var url=require('url');
var _url='http://localhost:3000/?id=economy&pass=1234';

var queryData=url.parse(_url,true).query;
console.log(queryData);
console.log(queryData.id);
console.log(queryData.pass);

var urlpath=url.parse(_url);
var querystring=require('querystring');
var queryData2=querystring.parse(urlpath.query);
console.log(queryData2);