/**
 * nconf모듈 (다른이가 만든 모듈을 가져옴)
 */

var nconf = require('nconf');

nconf.env();

console.log('현재 사용하고 있는 os:'+nconf.get('os')); //에러의 원인 >>> nconf모듈을 찾을 수없음 >설치필요.


console.dir('현재 사용하고 있는 os:'+nconf.get('OS')); //에러의 원인 >>> nconf모듈을 찾을 수없음 >설치필요.