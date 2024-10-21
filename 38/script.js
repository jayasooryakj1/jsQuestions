function myFun(){				
	var n=document.getElementById("n").value;
	var sum=0,avg=0;
	for(var i=1;i<=n;i++)
		sum+=i;
	avg=sum/n;
	document.write("Sum of first "+n+" natural numbers: "+sum+"<br>");
	document.write("Average of fist "+n+" natural numbers: "+avg);
}