function firstWord(s) {
  // your code here
	let output=[];
	output.push(s.split(' '));
	return output
	
}

// // Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))
