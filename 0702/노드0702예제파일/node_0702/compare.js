/**
 * http://usejsdoc.org/
 */


var compare={};

compare.max=function(a,b){
	var result;
	if(a>=b){
		result=a;
	}else{
		result=b;
	}
	return result;
}

compare.min=function(a,b){
	var result;
	if(a>=b){
		result=b;
	}else{
		result=a;
	}
	return result;
}

module.exports=compare;