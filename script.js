/**/
//var data=["hacking", "love", "hate", "mea"];
var data = ["am","you","us","ali","ibrahimt"]

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
//take the array of chr  from user and compare it with array chr of the mai1.

function isItChr (arr1,arr2){
	
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

// take the words length of array from user and compare it with words of the data.
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

//take array of arrays and return array Alphabetically arranged.
//why to use is: to check the chrs faster.
function alfa (arr){
	for (var i = 0; i< arr.length;i++){
		arr[i].sort();
	}
	return arr
}


var run = $("#check");
//I Love Hacking
run.click (function(){

	var mainText = $("#tx").val();		//mainText = I Love Hacking
	var arr0s = mainText.split(" "); 	//arr0s = ["I","Love","Hacking"]
	//console.log(arr0s) //["ma", "yuo"]
	
	 var arr1s = filter(arr0s,function(str){
  		return str.length>1 ;
	  	});								//arr1s = ["Love","Hacking"]
	//console.log(arr1s); //["ma", "yuo"]

	
	var arr1Main = arrLength(arr1s,data)
	
	//console.log(arr1Main); //["am", "us", "you", "ali"]			//arr1Main = ["Love","Hacking"]





//batick

var arr2Main = map(arr1Main, function(str){
	//console.log(str.split(""))
	var os = str.split("")
	console.log(os)
		return os;

	});
	

	console.log(arr2Main); //[["a", "m"], ["u", "s"], ["y", "o", "u"], ["a", "l", "i"]]
	/*
	var arr2s = map(arr1s, function(str){
		return str.split("");
	});
	//console.log(arr2s);	//[["a", "m"],["o", "u", "y"]]			//arr2s = [[L,o,v,e],[H,a,k,i,n,g]]

	var arr2sx = alfa(arr2s);
	var arr2Mainx = alfa(arr2Main);
	//console.log(arr2sx)			//
*/	

});



/*
arr2sx vs arr2Mainx

[["u","o","y"],["o","v","e","L"]] vs [["y","o","u"],["L","o","v","e"],["m","e","w"]]

 
//arrLength (["ma","yuo"],["am","you","us","ali","ibrahimt"])
//["am", "us", "you", "ali"] arr2Main
 

function s (min,max){
	for ( var i = 0; i< x.length;i++){
		for (var j = 0; j< x.length;j++){
			if (min[i]!==y[i]){
			return false
		}
		
	}
}
	return  true;
}
*/