function myFun(){				
	var s = document.getElementById("s").value;
	var c = document.getElementById("c").value;
	var s1 = s.toLowerCase();
	var c1 = c.toLowerCase();
	var i=0;
	var flag=0;
	while(s[i]!=undefined){
		if(s1[i]==c1){
			document.write("present in index: "+i+"<br>");
			flag=1;
		}
		i++;
	}
	if(flag==0)
		document.write(c+" not present in "+ s);
}