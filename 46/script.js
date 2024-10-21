function myFun(){				
	var r=parseInt(document.getElementById("r").value);
	var h=parseInt(document.getElementById("h").value);
	document.write("Surface area : "+((2*3.14*r*r)+(2*3.14*r*h))+"<br>");
	document.write("Volume : "+(3.14*r*r*h)+"<br>");
	document.write("Lateral Surface Area : "+(2*3.14*r*h)+"<br>");
	document.write("Cylinder top or bottom: "+(3.14*r*r));
}