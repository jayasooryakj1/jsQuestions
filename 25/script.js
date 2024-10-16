function myFun(){				
	var n=Number(document.getElementById("n").value);
	var f=n;
	var l=n;
	l=n%10;
	while(n>=10)
		n/=10;
	f=Math.floor(n);
	document.write("first number = "+f+"<br>");
	document.write("last number = "+l);
}