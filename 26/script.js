function myFun(){				
	var n=Number(document.getElementById("n").value);
	document.write("Multiplication table of "+n+"<br>");
	var m=0;
	for(var i=1;i<=10;i++)
	{
		m=i*n;
		document.write(i+" * "+n+" = "+m+"<br>");
	}
}