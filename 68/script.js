function myFun(){				
	var s = document.getElementById("s").value;
	var a = ['a','e','i','o','u','A','E','I','O','U']
	var v = 0;
	var c = 0;
	for(var i=0;i<s.length;i++)
		if(a.includes(s[i]))
			v++;
		else
			if(/[a-zA-Z]/.test(s[i]))
				c++;
	document.write("Number of consonents : "+c);
	document.write("<br>Number of vowels : "+v);
}