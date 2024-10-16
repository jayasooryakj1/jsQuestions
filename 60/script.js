function myFun(){				
	var n = document.getElementById("n").value;
	var l1 = n.length;
	var l2 = 0;
	document.write("Length using string function: "+ l1+"<br>");
	for(var i=0;n[i]!=undefined;i++)
		l2++;
	document.write("Length without using string function: "+ l2);
}