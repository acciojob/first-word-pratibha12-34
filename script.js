function firstWord(s) {
  // your code here
	let output=[];
	output.push(s.split(' ')[0]);
	return output
	// if(s=="" || '' === s){
	// 	return s
	}
	
}

// // Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
