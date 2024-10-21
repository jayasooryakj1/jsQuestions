function myFun(){				
	var n=parseInt(document.getElementById("n").value);
	var f=1;
	for(var i=1;i<=n;i++)
		f*=i;
	document.write(n+" factorial = "+f);
}