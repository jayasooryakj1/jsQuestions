function myFun(){				
	var n=parseInt(document.getElementById("n").value);
	for(var i=1;i<=n;i++)
		if(n%i==0)
			document.write(i+" ");
}