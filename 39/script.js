function myFun(){				
	var n=document.getElementById("n").value;
	var sum=0;
	for(var i=0;i<n;i++)
		if(i%2==0)
			sum+=i;
	document.write("Sum of even numbers till "+n+" = "+sum);
}