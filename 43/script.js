function myFun(){				
	var l=parseInt(document.getElementById("l").value);
	var r=parseInt(document.getElementById("r").value);
	var h=parseInt(document.getElementById("h").value);
	var sa=0, vol=0, lsa=0;
	document.write("Surface area : "+((3.14*r*l)+(3.14*r*r))+"<br>");
	document.write("Volume : "+((1/3)*3.14*r*r*h)+"<br>");
	document.write("Lateral Surface Area : "+ 3.14*r*l+"<br>");
}