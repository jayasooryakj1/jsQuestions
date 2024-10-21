function myFun(){				
	var s = document.getElementById("s").value;
	var n=0;
	var a=0;
	var sp=0;
	for(var i=0;i<s.length;i++){
		if(/[a-zA-Z]/.test(s[i]))
			a++;
		else
			if(/[0-9]/.test(s[i]))
				n++;
			else
				if(/[^a-zA-Z0-9\s]/.test(s[i]))
					sp++;
	}
	document.write("Number of digits: "+n );
	document.write("<br>Number of alphabets: "+a);
	document.write("<br>Number of special characters: "+sp);
}