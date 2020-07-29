/**
 * http://usejsdoc.org/
 */

var plus={};
plus.sum=function(a){
	var sum1=0;
	for(var i=0;i<=a;i++){
		sum1+=i;
	}
	return sum1;
}

plus.sum2=function(a,b){
	var sum2=0;
	if(a>b){
		var temp=a;
		a=b;
		b=temp;
	}
	for(var i=a;i<=b;i++){
		sum2+=i;
	}
	return sum2;
}

module.exports=plus;