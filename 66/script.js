function myFun(){				
	var s = document.getElementById("s").value;var i=0;
	var l = s.length;
	var t ="";
	var i = 0;
	var j = s.length-1;
	while(i<j){
		while(s[i]!='a' && s[i]!='e' && s[i]!='i' && s[i]!='o' && s[i]!='u')
			i++;
		while(s[j]!='a' && s[j]!='e' && s[j]!='i' && s[j]!='o' && s[j]!='u')
			j--;
		t+=s[i];
		s.replace(s[i],s[j])
		s.replace(s[j],t)
	}		
	document.write("After swapping vowels: "+s);
}
