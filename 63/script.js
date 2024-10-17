function myFun(){				
	var s = document.getElementById("s").value;
	var c = document.getElementById("c").value;
	var l= c.length;
	var flag=0;
	for(var i=0;i<l;i++)
		if(s[i]!=c[i])
			flag=1;
	if(flag==1)
		document.write(c+" is not the prefix of "+s);
	else
		document.write(c+" is the prefix of "+s);
}