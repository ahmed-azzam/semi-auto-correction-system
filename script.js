/**/
function each(array, func) {
	for (var i=0; i<array.length;i++ ){
	 	func(array[i]);
	}
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, f) {
var acc = [];
each(array, function(element, i) {
   acc.push(f(element, i));
});
return acc;
}
/*
function s (arr1,arr2){
	
	x.sort();
	y.sort();
	for ( var i = 0; i< x.length;i++){
		if (x[i]!==y[i]){
			return false
		}
	}
	return  true;
}

*/

var data=[hacking, love];

var run = $("#check");
//I Love Hacking
run.click (function(){

	var mainText = $("#tx").val();		//mainText = I Love Hacking
	var arr1Main = mainText.split(" "); 	//arr1Main = ["I","Love","Hacking"]
	//console.log(mainText)
	//using filter
	 var arr1s = filter(arr1Main,function(str){
  		return str.length>1 ;
	  	});								//arr1s = ["Love","Haking"]
	//console.log(arr1s);
	
/*
	var arr2Main = filter(data,function(str){
  		return  ;
	  	});								
*/


	//usning map
	var arr2s = map(arr1s, function(str){
		return str.split("");
	});
	//console.log(arr2s);				//arr2s = [[L,o,v,e],[H,a,k,i,n,g]]

	

} ) 

/*
[[L,o,v,e],[H,a,k,i,n,g]]

var x = ["L","o","v","e"];

var y =  ["o","v","e","L"];

function s (x,y){
	
	x.sort();
	y.sort();
	for ( var i = 0; i< x.length;i++){
		if (x[i]!==y[i]){
			return false
		}
	}
	return  true;
}
*/