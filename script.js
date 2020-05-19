/**/
var data=["hacking", "love", "hate", "mea"];


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

function arrLength (min,max){
		var acc = [];
		for (var i = 0; i < min.length; i++) {
			for(var j = 0; j < max.length; j++){
				if(max[j].length===min[i].length){
					acc.push(max[j]) 
				}
			}
		}
	return acc;
}



var run = $("#check");
//I Love Hacking
run.click (function(){

	var mainText = $("#tx").val();		//mainText = I Love Hacking
	var arr0s = mainText.split(" "); 	//arr0s = ["I","Love","Hacking"]
	//console.log(mainText)
	
	 var arr1s = filter(arr0s,function(str){
  		return str.length>1 ;
	  	});								//arr1s = ["Love","Hacking"]
	//console.log(arr1s);

	
	var arr1Main = arrLength(arr1s,data)
	
	//console.log(arr1Main);			//arr1Main = ["Love","Hacking"]

var arr2Main = map(arr1Main, function(str){
		return str.split("");
	});
	//console.log(arr2Main);
	
	var arr2s = map(arr1s, function(str){
		return str.split("");
	});
	//console.log(arr2s);				//arr2s = [[L,o,v,e],[H,a,k,i,n,g]]

	

});



/*
arr2s vs arr2Main

[["u","o","y"],["o","v","e","L"]] vs [["y","o","u"],["L","o","v","e"],["m","e","w"]]

 

 

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