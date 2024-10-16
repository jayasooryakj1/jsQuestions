function myFun(){				
	var n=document.getElementById("n").value;
	sum=0;
	for(var i=1;i<n;i++)
		if(n%i==0)
			sum+=i;
	if(sum==n)
		document.write("Perfect number");
	else
		document.write("Not a perfect number");		
}