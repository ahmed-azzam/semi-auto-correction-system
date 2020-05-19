/**/


var run = $("#check");
//I Love Hacking
//mainText = I Love Hacking
// arrMain = ["I","Love","Hacking"]
//arr1s = ["Love","Haking"]

run.click (function(){

	var mainText = $("#tx").val();
	var arrMain = mainText.split(" ");
	//console.log(mainText)
	var arr1s =[];
	for (var i = 0; i < arrMain.length; i++) {
		if (arrMain[i].length>1){
			arr1s.push(arrMain[i]);
		}
	}
	//console.log(arr1s);

} ) 