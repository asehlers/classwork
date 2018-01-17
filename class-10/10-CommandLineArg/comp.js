var input1 = parseInt(process.argv[2]);
var input2 = parseInt(process.argv[3]);

if(input1 === undefined || input2 === undefined){
	console.log("please enter correct input");
}else{
	if(input1 == input2){
		console.log("Equal: true");
	}else{
		console.log("Equal: false");
	}

	if(input1%7 === 0 && input2%7 ===0){
		console.log("multiples of 7: true");
	}else{
		console.log("mulitples of 7: false");
	}
}