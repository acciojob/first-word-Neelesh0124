function firstWord(s) {
  // your code here
	let i = 0;
	while (s[i]==' ') {
		s.length = s.length-1;	
	}
	for (let i = 0; i < s.length; i++) {
		if (s[i]==' ') {
			break;
			
		}
		else{
			console.log(s[i])
		}
		
	}
	
}

// Do not change the code below

//const s = prompt("Enter String:");
//alert(firstWord(s));
