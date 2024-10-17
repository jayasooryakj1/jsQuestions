function myFun(){				
	var n = document.getElementById("n").value;
	var l = n.length;
	m=Math.ceil(l/2);
	if(l%2==0)
		document.write("No perfect middle character available");
	else
		document.write("Middle character is "+n[m]);
}