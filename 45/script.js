function myFun(){				
	var l=parseInt(document.getElementById("l").value);
	var b=parseInt(document.getElementById("b").value);
	var h=parseInt(document.getElementById("h").value);
	document.write("Surface area : "+((2*l*b)+(2*l*h)+(2*b*h))+"<br>");
	document.write("Volume : "+(l*b*h)+"<br>");
	document.write("Lateral Surface Area : "+(2*h*(l+b))+"<br>");
}