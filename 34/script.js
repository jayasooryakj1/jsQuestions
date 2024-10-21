function myFun(){				
	var n=document.getElementById("n").value;
	var flag=0;
	for(var i=2;i<n;i++)
		if(n%i==0)
			flag=1;
	if(flag==0)
		document.write("Prime number");
	else
		document.write("Not a prime number");
}