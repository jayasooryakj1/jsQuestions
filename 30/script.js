function myFun(){				
	var n=Number(document.getElementById("n").value);
	for(var i=1;i<n;i++)
		if(i%2!=0)
			document.write(i+"<br>");
		
}