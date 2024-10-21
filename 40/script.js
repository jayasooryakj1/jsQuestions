function myFun(){				
	var n=document.getElementById("n").value;
	var sumEven=0;
	var sumOdd=0;
	for(var i=0;i<n;i++)
		if(i%2==0)
			sumEven+=i;
		else
			sumOdd+=i;
	document.write("Sum of even numbers till "+n+" = "+sumEven+"<br>");
	document.write("Sum of odd numbers till "+n+" = "+sumOdd);
}