function myFun(){				
	var s = document.getElementById("s").value;
	var s1 = s.toUpperCase();
	if(s==s1)
		s=s.toLowerCase();
	else
		s=s1;
	document.write("After switching: "+s);
}