function myFun(){				
	var s = document.getElementById("s").value
	var t;
	var first = s.charCodeAt(0);
	var last = s.charCodeAt(s.length-1);
	for(var i=first,j=0;i<=last;i++){
		if(String.fromCharCode(i)!=s[j])
			document.write(String.fromCharCode(i));
		else
			j++;
		
	}
}