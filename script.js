/**/
//var data=["hacking", "love", "hate", "mea"];
var data = [];

data.push("ali","am","us","you","ahmed","hate","love" ,"ibrahim","meaning")

function each(array, func) {
	 for (var i=0; i<array.length; i++){
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

function n (a1,a2,f){
	for (var i = 0; i<a2.length; i++){
		if(a1.join()===a2[i].join()){
			return f(i);
		}

	}
	return f(-1)
}
// loop0 a1=["a", "m"],a2=[["a", "m"], ["s", "u"]]
//loop1 a1=["a", "d", "s"],a2 = [["o", "u", "y"], ["a", "i", "l"]]

function s (mini, maxi){
	var indexes=[]
	var ar=[];
	for (var i = 0; i<mini.length; i++){
		var arr3Main = filter(maxi, function(arr){
			return arr.length === mini[i].length;
		});
		//console.log (arr3Main);
		ar.push(arr3Main.length);
		n (mini[i],arr3Main, function (i){
			indexes.push(i)
		})
		
	}
	//console.log(ar)
	for(var i = 1; i<indexes.length; i++){
		for (var j = 0; j<i; j++){
        	if(indexes[i]!==-1){
        		indexes[i]+=ar[j]
        	}
        		//console.log(arr2s[x[i]])
        		//confirm("Did you want to add "++ "?")
        	
    	}
    }
	return indexes;
}

//loop 0 
//var arr3Main=[["a", "m"], ["s", "u"]].
//loop 1
//var arr3Main = [["o", "u", "y"], ["a", "i", "l"]]

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
	return arr;
}

$("#clear").click(function(){
	//console.log($("#result"));
	$("#tx")[0].value="";
	$("#result")[0].textContent="";
});



var run = $("#check");
//I Love Hacking
run.click (function(){

	var mainText = $("#tx").val();	//ahmed green we	
	var arr0s = mainText.split(" "); 	
	//console.log(arr0s) //["ahmed", "green", "we"]
	
	 var arr1s = filter(arr0s,function(str){
  		return str.length>1 ;
	  	});	
	//console.log(arr1s); //["ahmed", "we", "green"]

	
	var arr1Main = arrLength(arr1s,data)

	
	console.log(arr1Main); //





//watermelon

var arr2Main = map(arr1Main, function(str){
	
	var os = str.split("")
		return os;
	});
	//console.log(arr2Main); //[["a", "m"], ["u", "s"], ["y", "o", "u"], ["a", "l", "i"]]
	
	var arr2s = map(arr1s, function(str){
		return str.split("");
	});
	//console.log(arr2s);	//[["a", "m"],["o", "u", "y"]]			//arr2s = [[L,o,v,e],[H,a,k,i,n,g]]

	var z = map(arr1Main, function(str){
	
	var os = str.split("")
		return os;
	});
	var m = map(arr1s, function(str){
		return str.split("");
	});

	var arr2Mainx = alfa(z);
	var arr2sx = alfa(m);
	//console.log(arr2Mainx) //array alfa //[["a", "m"], ["s", "u"], ["o", "u", "y"], ["a", "i", "l"]]
	//console.log(arr2sx)		//[["a", "s"], ["a", "d", "s"]]



var x = s (arr2sx,arr2Mainx)
//console.log (x) //return array of indext of arr2Main //su lia ==> [1, 3]; 
	var result = ""
for (var i = 0; i < x.length; i++){
	if (x[i]===-1){
		var r = confirm("Did you want to add the woerd: "+arr1s[i] +"?");
		if(r){
			data.push(arr1s[i]);
			//console.log(data)
		}
		//console.log(arr1s)
	}else{
		//console.log(arr2Main[x[i]])
		result+=arr2Main[x[i]].join("")+" ";
		//console.log(result)
	}
	
}
$("#result").html(result)

});



/*		  arr2Main 			     [["a", "m"], ["u", "s"], ["y", "o", "u"], ["a", "l", "i"]]
arr2sx vs arr2Mainx
 
[["a", "m"], ["a", "d", "s"]] vs [["a", "m"], ["s", "u"], ["o", "u", "y"], ["a", "i", "l"]]
*/





