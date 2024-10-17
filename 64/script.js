function myFun(){				
	var s = document.getElementById("s").value;
	var ss = document.getElementById("ss").value;
	var ssr = document.getElementById("ssr").value;
	s=s.replace(ss,ssr);
	document.write("string after replacement "+s)
}