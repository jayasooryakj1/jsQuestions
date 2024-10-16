function myFun(){				
	var n=parseInt(document.getElementById("n").value);
	var count=1;
	while(n>10){
		n/=10;
		count++;
	}
	document.write("Number of digits : "+count);
}